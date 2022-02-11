import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-nav',
  templateUrl: './button-nav.component.html',
  styleUrls: ['./button-nav.component.scss']
})
export class ButtonNavComponent {

  @Input() text: string = 'Button Nav';
  @Input() link: string = '#home';  

}
