import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent {
  
  @Input() title: string = 'Título';
  @Input() image: string = "../../assets/images/default/default-product.svg";
  @Input() infos: Array<string> = ["Informação 1", "Informação 2", "Informação 3"];
  @Input() price: number = 120.20;

}
