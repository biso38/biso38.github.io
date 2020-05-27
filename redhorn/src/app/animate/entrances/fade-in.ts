import { state, animate, style, transition } from '@angular/animations';

export const fadeIn = [

  state('idle-fadeIn', style({ opacity: 0 }) ),
  state('idle-fadeInRight', style({ opacity: 0 }) ),
  state('idle-fadeInLeft', style({ opacity: 0 }) ),
  state('idle-fadeInUp', style({ opacity: 0 }) ),
  state('idle-fadeInDown', style({ opacity: 0 }) ),

  transition('* => fadeIn', [

    style({ opacity: 0 }),
    
<<<<<<< HEAD
    animate('{{timing}} {{delay}} ease-in', style('*'))
=======
    animate('{{timing}} {{delay}} ease-out', style('*'))
>>>>>>> 1e124f79dbe13aa5e459ae51c832ce03860ab2ac

  ], { params: { timing: '1s', delay: '' }} ),

  transition('* => fadeInRight', [

<<<<<<< HEAD
    style({ opacity: 0, transform: 'translateX(-20px)' }),

    animate('{{timing}} {{delay}} ease-in', style('*'))
=======
    style({ opacity: 0, transform: 'translateX(-100%)' }),

    animate('{{timing}} {{delay}} ease-out', style('*'))
>>>>>>> 1e124f79dbe13aa5e459ae51c832ce03860ab2ac

  ], { params: { timing: '1s', delay: '' }} ),

  transition('* => fadeInLeft', [

<<<<<<< HEAD
    style({ opacity: 0, transform: 'translateX(20px)' }),

    animate('{{timing}} {{delay}} ease-in', style('*'))
=======
    style({ opacity: 0, transform: 'translateX(100%)' }),

    animate('{{timing}} {{delay}} ease-out', style('*'))
>>>>>>> 1e124f79dbe13aa5e459ae51c832ce03860ab2ac

  ], { params: { timing: '1s', delay: '' }} ),

  transition('* => fadeInUp', [

<<<<<<< HEAD
    style({ opacity: 0, transform: 'translateY(20px)' }),

    animate('{{timing}} {{delay}} ease-in', style('*'))
=======
    style({ opacity: 0, transform: 'translateY(100px)' }),

    animate('{{timing}} {{delay}} ease-out', style('*'))
>>>>>>> 1e124f79dbe13aa5e459ae51c832ce03860ab2ac

  ], { params: { timing: '1s', delay: '' }} ),

  transition('* => fadeInDown', [

<<<<<<< HEAD
    style({ opacity: 0, transform: 'translateY(-20px)' }),
=======
    style({ opacity: 0, transform: 'translateY(-100px)' }),
>>>>>>> 1e124f79dbe13aa5e459ae51c832ce03860ab2ac

    animate('{{timing}} {{delay}} ease-in', style('*'))

  ], { params: { timing: '1s', delay: '' }} ),
  
];