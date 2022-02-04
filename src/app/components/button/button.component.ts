import { Component, Input } from '@angular/core';
import { ConfigButton } from 'src/app/models/config-button.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() config: ConfigButton = { text: 'Enviar', color: 'white', type: 'button', loading: false };

}
