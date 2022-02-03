import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  listMenu = [
    { name: 'Home', link: '/home' },
    { name: 'Sobre Nós', link: '/home' },
    { name: 'Serviços', link: '/home' },
    { name: 'Contato', link: '/home' },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
