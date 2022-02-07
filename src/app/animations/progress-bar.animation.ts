import { animate, keyframes, state, style, transition, trigger } from '@angular/animations';

export const animationBar = trigger('animationBar', [
  transition(':enter', [
    animate(800, keyframes([
      style({ width: `0%` }), // from
      style({ width: `{{width}}%` }) // to
    ])),
  ]),
  state('fixedStyle', style({ width: `{{width}}%` }), { params: { width: 0 } }), // this params is default
]);
