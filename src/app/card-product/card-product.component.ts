import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-product',
  templateUrl: './card-product.component.html',
  styleUrls: ['./card-product.component.scss']
})
export class CardProductComponent {
  @Input() title: string = 'Título';
  @Input() image: string = "../../assets/default-product.png";
  @Input() infos: Array<string> = ["Informação 1", "Informação 2", "Informação 3"];
  @Input() price: number = 120.55;

}