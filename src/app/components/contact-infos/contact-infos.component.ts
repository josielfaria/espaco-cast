import { Component, OnInit } from '@angular/core';
import { ContactInfosModel } from 'src/app/models/contact-infos.model';

@Component({
  selector: 'app-contact-infos',
  templateUrl: './contact-infos.component.html',
  styleUrls: ['./contact-infos.component.scss']
})
export class ContactInfosComponent {

  infos: Array<ContactInfosModel> = [
    { icon: 'icon-map', text: 'QL7 Conjunto B, Lote 12, 58 - Riacho Fundo I, DF' },
    { icon: 'icon-tel', text: '(617) 557-0089' },
    { icon: 'icon-email', text: 'contact@example.com' }
  ];

  constructor() { }

  getIconUrl(iconName: string): string {
    return `../../../assets/images/icons/${iconName}.svg`;
  }

}
