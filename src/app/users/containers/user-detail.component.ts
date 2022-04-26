import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable, Subscription } from 'rxjs';
import { filter, map, take } from 'rxjs/operators';

import { GenderDataMap, StatusDataMap, User } from '@common/models';
import {
  UserPageActions,
  UserPageSelectors,
  UsersActions,
  UsersSelectors,
} from '../store';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss'],
})
export class UserDetailComponent implements OnInit, OnDestroy {
  @Select(UserPageSelectors.selectIsPending) pending$!: Observable<boolean>;
  @Select(UsersSelectors.selectUserByIdFn) selectUserByIdFn$!: Observable<
    (id: number) => undefined | User
  >;

  public Gender = GenderDataMap;
  public Status = StatusDataMap;

  public form!: FormGroup;
  public formSubmitted = false;
  public idFormControl = new FormControl(null);
  public nameFormControl = new FormControl('', [Validators.required]);
  public emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  public genderFormControl = new FormControl(null, [Validators.required]);
  public statusFormControl = new FormControl(null, [Validators.required]);

  public id!: number;

  public isNewUser = false;

  private pendingSubscription: Subscription = new Subscription();

  constructor(
    private store: Store,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.form = this.formBuilder.group({
      id: this.idFormControl,
      name: this.nameFormControl,
      email: this.emailFormControl,
      gender: this.genderFormControl,
      status: this.statusFormControl,
    });
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'));

    this.isNewUser = this.id === 0;

    if (!this.isNewUser) {
      this.form.disable();

      this.store.dispatch(new UsersActions.LoadDetailData({ id: this.id }));

      this.selectUserByIdFn$
        .pipe(
          map((fn) => fn(this.id)),
          take(1),
          filter(Boolean)
        )
        .subscribe((user: User) => {
          this.form.patchValue(user);
        });
    }

    this.pendingSubscription = this.pending$.subscribe((isPending: boolean) => {
      isPending ? this.form.disable() : this.form.enable();
    });
  }

  ngOnDestroy(): void {
    this.pendingSubscription.unsubscribe();
  }

  getNameErrorMessage(): string {
    return 'Please enter a Name';
  }

  getEmailErrorMessage(): string {
    if (this.form.controls['email'].hasError('required')) {
      return 'Please enter an email address';
    }

    return this.form.controls['email'].hasError('email')
      ? 'Not a valid email'
      : '';
  }

  getGenderErrorMessage(): string {
    return 'Please select a gender';
  }

  getStatusErrorMessage(): string {
    return 'Please select a user status';
  }

  handleSubmit(): void {
    this.formSubmitted = true;

    if (this.form.invalid) {
      return;
    }

    if (this.isNewUser) {
      this.store.dispatch(new UserPageActions.AddUser(this.form.value));

      return;
    }

    this.store.dispatch(new UserPageActions.UpdateUser(this.form.value));
  }

  handleCancel(event: MouseEvent): void {
    event.preventDefault();

    this.form.reset();

    this.store.dispatch(new UserPageActions.Cancel());
  }
}
