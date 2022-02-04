import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';

@Injectable({
  providedIn: 'root'
})
export class SendEmailService {
  sendEmailJs(event: Event): Promise<any> {
    // TODO: add info to email no git credentials build
    return emailjs.sendForm('service_w8a6uu7', 'template_tkqgrii', event.target as HTMLFormElement, 'user_bgjfpfAYAiGlQLRNsfPDv');
  }
}
