import { Component } from '@angular/core';
import { ConfigButtonModel } from 'src/app/models/config-button.model';
import { SendEmailService } from 'src/app/services/send-email.service';
import { EmailJSResponseStatus } from '@emailjs/browser';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  configButton: ConfigButtonModel = { text: 'Enviar', color: 'white', type: 'submit', loading: false };

  constructor(private emailService: SendEmailService, private notificationService: NotificationService) { }

  sendEmail(e: Event): void {
    e.preventDefault();
    this.configButton.loading = true;
    
    this.emailService.sendEmailJs(e).then((result: EmailJSResponseStatus) => {
      this.endNotifications(result.text, 'success', 'Mensagem enviada com sucesso!');
    }, (error) => {
      console.log(error.text);
      this.endNotifications(error.text, 'danger', 'Não foi possível enviar um email! Contate-nos de outra forma :)');
    });
  }

  private endNotifications(log: string, type: string, message: string): void {
    console.log('Erro: ', log);
    this.configButton.loading = false;
    this.notificationService.notify({ type, message });
  }

}
