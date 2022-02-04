import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section-about',
  templateUrl: './section-about.component.html',
  styleUrls: ['./section-about.component.scss']
})
export class SectionAboutComponent {

  title: string = "Sobre Nós";

  itemsAbout = [
    { text: "EspaçoCast fornece um ambiente confortável e com uma estrutura de qualidade para o seu podcast.", image: "../../../assets/default-product.png" },
    { text: "EspaçoCast fornece um ambiente confortável e com uma estrutura de qualidade para o seu podcast.", image: "../../../assets/default-product.png" },
    { text: "EspaçoCast fornece um ambiente confortável e com uma estrutura de qualidade para o seu podcast.", image: "../../../assets/default-product.png" },
    { text: "EspaçoCast fornece um ambiente confortável e com uma estrutura de qualidade para o seu podcast.", image: "../../../assets/default-product.png" },
  ]

}