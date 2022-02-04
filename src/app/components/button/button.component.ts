import { Component, Input } from '@angular/core';
import { ConfigButtonModel } from 'src/app/models/config-button.model';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  @Input() config: ConfigButtonModel = { text: 'Enviar', color: 'white', type: 'button', loading: false };

}
