import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { DataService } from '../data/data.service';
import { UserSettings } from '../data/user-settings';

@Component({
  selector: 'app-user-settings-form',
  templateUrl: './user-settings-form.component.html',
  styleUrls: ['./user-settings-form.component.css'],
})
export class UserSettingsFormComponent implements OnInit {
  savedUserSettings: UserSettings = {
    name: null,
    emailOffers: null,
    interfaceStyle: null,
    subscriptionType: null,
    notes: null,
  };

  userSettings: UserSettings = { ...this.savedUserSettings };

  constructor(private dataService: DataService) {}

  ngOnInit() {}

  onSubmit(form: NgForm): void {
    console.log('in onSubmit: ', form.valid);
    this.dataService.postUserSettingsForm(this.userSettings).subscribe({
      next: (result) => console.log('success: ', result),
      error: (error) => console.log('error: ', error),
    });
  }

  onBlur(field: NgModel) {
    console.log('in onBlur: ', field.value);
  }
}
