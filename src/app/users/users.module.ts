import { NgModule } from '@angular/core';
import { NgxsModule } from '@ngxs/store';

import { CoreModule } from '@core/core.module';
import { UiModule } from '@ui/ui.module';
import { UsersRoutingModule } from './users-routing.module';
import { CONTAINERS } from './containers';
import { store } from './store';

@NgModule({
  declarations: CONTAINERS,
  imports: [
    CoreModule,
    UiModule,
    UsersRoutingModule,
    NgxsModule.forFeature(store),
  ],
})
export class UsersModule {}
