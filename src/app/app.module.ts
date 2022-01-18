import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserSettingsFormComponent } from './user-settings-form/user-settings-form.component';
import { HttpClient } from '@angular/common/http';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClient],
  declarations: [AppComponent, UserSettingsFormComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
