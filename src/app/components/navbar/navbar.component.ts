import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  listMenu = [
    { name: 'Home', link: '/home' },
    { name: 'Sobre Nós', link: '/about' },
    { name: 'Serviços', link: '/service' },
    { name: 'Contato', link: '/contact' },
  ];

}
