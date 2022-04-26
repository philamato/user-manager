import { NgModule } from '@angular/core';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgxsModule } from '@ngxs/store';

import { CoreModule } from '@core/core.module';
import { ConfigurationModule } from '@configuration/configuration.module';
import { UiModule } from '@ui/ui.module';
import { AuthInterceptor } from './services/auth.interceptor';
import { AuthState } from './store/auth.state';
import { CONTAINERS } from './containers';

@NgModule({
  declarations: CONTAINERS,
  imports: [
    CoreModule,
    ConfigurationModule,
    UiModule,
    NgxsModule.forFeature([AuthState]),
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class AuthModule {}
