import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  scrolling: boolean = false;

  @HostListener('window:scroll', ['$event']) onScrollEvent($event: any) {
    $event.target['scrollingElement'].scrollTop > 100 ? this.scrolling = true : this.scrolling = false;
  }

  listMenu = [
    { name: 'Home', link: '#home' },
    { name: 'Sobre Nós', link: '#about' },
    { name: 'Serviços', link: '#services' },
    { name: 'Contato', link: '#contact' },
  ];

}
