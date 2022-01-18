import { Component, OnInit } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { Observable } from 'rxjs';
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
  subscriptionTypes: Observable<string[]>;
  singleModel = 'On';
  startDate: Date;
  startTime: Date;
  userRating: number = 3;
  maxRating: number = 10;
  isReadonly: false;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.subscriptionTypes = this.dataService.getSubscriptionTypes();
    this.startDate = new Date();
    this.startTime = new Date();
  }

  onSubmit(form: NgForm): void {
    console.log('in onSubmit: ', form.valid);
    // do not send if form is invlaid locally...
    if (form.invalid) return;

    this.dataService.postUserSettingsForm(this.userSettings).subscribe({
      next: (result) => console.log('success: ', result),
      error: (error) => console.log('error: ', error),
    });
  }

  onBlur(field: NgModel) {
    console.log('in onBlur: ', field.value);
  }
}
