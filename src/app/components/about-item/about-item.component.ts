import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-about-item',
  templateUrl: './about-item.component.html',
  styleUrls: ['./about-item.component.scss']
})
export class AboutItemComponent {

  durationItemLeft = 750;
  durationItemRight = 1500;

  @Input() text = 'Sem texto!';
  @Input() image = '../../../assets/images/default/default-product.svg';
  @Input() number = 0;
}
