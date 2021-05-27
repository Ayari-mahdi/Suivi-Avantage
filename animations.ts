import { animate, style, transition, trigger } from '@angular/animations';
export let fade =
    trigger('fade',[
      transition('void => *',[
        style({transform:'translateY(-200%) scale(0) translateX(70%)'}),
        animate('0.4s',style({transform:'translateY(0%)  '}))
      ]),
      transition('*=>void',[
        
        animate('2s',style({transform:'translateX(100%)'}))
      ])
    ])
  