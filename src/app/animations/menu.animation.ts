import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export const animationMenu = trigger('animationMenu', [
  transition(':enter', [
    animate(400, keyframes([
      style({ width: `0%` }), // from
      style({ width: `{{width}}%` }) // to
    ])),
  ]),
  state('fixedStyle', style({ width: `{{width}}%` }), { params: { width: 0 } }), // this params is default
]);

export const animationMenuOpenClosed = trigger('openClose', [
  transition(':enter', [
    animate(300, keyframes([
      style({ transform: 'translateX(100%)' }), // to
    style({ transform: 'translateX(0%)' }) // from
    ])),
  ]),
  transition(':leave', [
    animate(300, keyframes([
      style({ transform: 'translateX(0%)' }), // from
      style({ transform: 'translateX(100%)' }) // to
    ])),
  ])
]);
