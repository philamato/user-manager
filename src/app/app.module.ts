import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ConfigurationModule } from '@configuration/configuration.module';
import { CoreModule } from '@core/core.module';
import { AuthModule } from '@auth/auth.module';
import { UiModule } from '@ui/ui.module';
import { AppRoutingModule } from './app-routing.module';
import { AppStoreModule } from './app-store.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    ConfigurationModule,
    AppStoreModule,
    AppRoutingModule,
    AuthModule,
    UiModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
