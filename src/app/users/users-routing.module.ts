import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserDetailComponent, UsersListComponent } from './containers';
import { ValidUserGuard } from './services/valid-user.guard';

const routes: Routes = [
  {
    path: '',
    component: UsersListComponent,
    data: { title: 'Users' },
  },
  {
    path: 'user/create',
    component: UserDetailComponent,
    data: { title: 'Create New User ' },
  },
  {
    path: 'user/:id',
    canActivate: [ValidUserGuard],
    component: UserDetailComponent,
    data: { title: 'Edit User Detail' },
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
