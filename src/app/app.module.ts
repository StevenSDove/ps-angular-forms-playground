import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserSettingsFormComponent } from './user-settings-form/user-settings-form.component';
import { ButtonsModule } from 'ngx-bootstrap/buttons/public_api';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule, ButtonsModule],
  declarations: [AppComponent, UserSettingsFormComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
