import { Component, Input, OnInit } from '@angular/core';
import { ConfigNotificationModel } from 'src/app/models/config-notification.model';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.scss']
})
export class NotificationComponent implements OnInit {
  config: ConfigNotificationModel = { type: 'success', message: 'Sucesso!' };

  constructor(private notificationService: NotificationService) { }

  ngOnInit(): void {
    this.notificationService.getConfig().subscribe(config => this.config = config);
  }

  getClass(): string {
    return 'alert alert-' + this.config.type;
  };
}
