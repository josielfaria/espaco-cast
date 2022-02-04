import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ConfigNotificationModel } from '../models/config-notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private config = new Subject<ConfigNotificationModel>();
  private config$ = this.config.asObservable();

  notify(newConfig: ConfigNotificationModel): void {
    newConfig.show = true;
    this.config.next(newConfig);

    this.hideNotification(newConfig);
  }

  getConfig(): Observable<ConfigNotificationModel> {
    return this.config$;
  }

  private hideNotification(newConfig: ConfigNotificationModel): void {
    setTimeout(() => {
      newConfig.show = false;
      this.config.next(newConfig);
    }, 3000);
  }

}
