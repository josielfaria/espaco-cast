import { Component } from '@angular/core';
import { ConfigButton } from 'src/app/models/config-button.model';
import { SendEmailService } from 'src/app/services/send-email.service';
import { EmailJSResponseStatus } from '@emailjs/browser';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent {

  configButton: ConfigButton = { text: 'Enviar', color: 'white', type: 'submit', loading: false };

  constructor(private emailService: SendEmailService) { }

  sendEmail(e: Event): void {
    e.preventDefault();
    this.configButton.loading = true;
    this.emailService.sendEmailJs(e).then((result: EmailJSResponseStatus) => {
      console.log(result.text);
      this.configButton.loading = false;
    }, (error) => {
      console.log(error.text);
      this.configButton.loading = false;
    });
  }

}
