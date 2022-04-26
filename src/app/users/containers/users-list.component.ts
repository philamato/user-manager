import {
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Select, Store } from '@ngxs/store';
import { filter, Observable, Subscription } from 'rxjs';

import { User } from '@common/models';
import { UsersListPageActions, UsersActions, UsersSelectors } from '../store';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss'],
})
export class UsersListComponent implements OnInit, OnDestroy, AfterViewInit {
  @Select(UsersSelectors.selectUsers) users$!: Observable<User[]>;

  public dataSource = new MatTableDataSource<User>([]);

  public displayedColumns: string[] = [
    'name',
    'email',
    'gender',
    'status',
    'actions',
  ];

  public usersListSubscription: Subscription = new Subscription();

  constructor(public store: Store) {}

  @ViewChild(MatSort) sort!: MatSort;

  ngOnInit(): void {
    this.store.dispatch(new UsersActions.LoadListData());

    this.usersListSubscription = this.users$
      .pipe(filter(Boolean))
      .subscribe((users) => {
        this.dataSource = new MatTableDataSource<User>(users);
        this.dataSource.sort = this.sort;
      });
  }

  ngOnDestroy(): void {
    this.usersListSubscription.unsubscribe();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  handleAddNewUser(event: MouseEvent): void {
    event.preventDefault();

    this.store.dispatch(new UsersListPageActions.AddUser());
  }

  handleDeleteUser(event: MouseEvent, id: number): void {
    event.preventDefault();

    this.store.dispatch(new UsersListPageActions.DeleteUser({ id }));
  }
}
