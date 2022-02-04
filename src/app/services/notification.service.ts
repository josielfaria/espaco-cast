import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ConfigNotification } from '../models/config-notification.model';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private config = new Subject<ConfigNotification>();
  private config$ = this.config.asObservable();

  notify(newConfig: ConfigNotification): void {
    newConfig.show = true;
    this.config.next(newConfig);

    this.hideNotification(newConfig);
  }

  getConfig(): Observable<ConfigNotification> {
    return this.config$;
  }

  private hideNotification(newConfig: ConfigNotification): void {
    setTimeout(() => {
      newConfig.show = false;
      this.config.next(newConfig);
    }, 3000);
  }

}
