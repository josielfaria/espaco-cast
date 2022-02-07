import { animate, keyframes, style, transition, trigger } from '@angular/animations';

export const animationEmailIcon = trigger('animationEmailIcon', [
  transition(':enter', [
    animate(800, keyframes([
      style({ opacity: `0`, transform: 'scale(0) rotate(15deg) translateX(200%)' }),
      style({ opacity: `1`, transform: 'scale(1) rotate(0deg) translateX(0%)' })
    ])),
  ]),
]);

export const animationEmailForm = trigger('animationEmailForm', [
  transition(':enter', [
    animate(800, keyframes([
      style({ opacity: `0`, transform: 'translateY(200%)' }),
      style({ opacity: `1`, transform: 'translateY(0%)' })
    ])),
  ]),
]);
