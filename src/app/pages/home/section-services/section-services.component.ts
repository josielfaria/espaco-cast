import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-services',
  templateUrl: './section-services.component.html',
  styleUrls: ['./section-services.component.scss']
})
export class SectionServicesComponent {
  title = 'Serviços';

  listServices = [
    {
      title: 'Título 1',
      image: "../../assets/images/default/default-product.svg",
      infos: ["Informação 1", "Informação 2", "Informação 3"],
      price: 120.55
    },
    {
      title: 'Título 2',
      image: "../../assets/images/default/default-product.svg",
      infos: ["Informação 1", "Informação 2", "Informação 3"],
      price: 120.55
    },
    {
      title: 'Título 2',
      image: "../../assets/images/default/default-product.svg",
      infos: ["Informação 1", "Informação 2", "Informação 3"],
      price: 120.55
    }
  ];
}