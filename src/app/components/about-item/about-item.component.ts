import { Component, Input } from '@angular/core';
import { animationZoomIn } from 'src/app/animations/about.animation';

@Component({
  selector: 'app-about-item',
  templateUrl: './about-item.component.html',
  styleUrls: ['./about-item.component.scss'],
  animations: [animationZoomIn]
})
export class AboutItemComponent {

  @Input() text = 'Sem texto!';
  @Input() image = '../../../assets/default-product.png';
  @Input() number = 0;
}
