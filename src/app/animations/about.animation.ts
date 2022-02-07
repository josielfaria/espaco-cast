import { animate, keyframes, style, transition, trigger } from '@angular/animations';

export const animationZoomIn = trigger('zoomIn', [
  transition('* => 0', [
    animate(200, keyframes([
      style({ opacity: `0`, transform: 'scale(0) rotate(15deg)' }),
      style({ opacity: `1`, transform: 'scale(1) rotate(0deg)' })
    ])),
  ]),
  transition('* => 1', [
    animate(600, keyframes([
      style({ opacity: `0`, transform: 'scale(0) rotate(15deg)' }),
      style({ opacity: `1`, transform: 'scale(1) rotate(0deg)' })
    ])),
  ]),
  transition('* => 2', [
    animate(1000, keyframes([
      style({ opacity: `0`, transform: 'scale(0) rotate(15deg)' }),
      style({ opacity: `1`, transform: 'scale(1) rotate(0deg)' })
    ])),
  ]),
  transition('* => 3', [
    animate(1400, keyframes([
      style({ opacity: `0`, transform: 'scale(0) rotate(15deg)' }),
      style({ opacity: `1`, transform: 'scale(1) rotate(0deg)' })
    ])),
  ]),
  transition('* => *', [
    animate(1800, keyframes([
      style({ opacity: `0`, transform: 'scale(0) rotate(15deg)' }),
      style({ opacity: `1`, transform: 'scale(1) rotate(0deg)' })
    ])),
  ]),
]);

