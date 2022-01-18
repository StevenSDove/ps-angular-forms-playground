import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserSettings } from './user-settings';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  postUserSettingsForm(userSettings: UserSettings): Observable<UserSettings> {
    return this.http.post<UserSettings>(
      'https://putsreq.com/2LcAZspbQN4LozLQfHoP',
      userSettings
    );
    // return of(userSettings);
  }

  getSubscriptionTypes(): Observable<string[]> {
    return of(['Trial', 'Monthly', 'Annual', 'Lifetime']);
  }
}
