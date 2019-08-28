import { Directive, Input, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appTodo]'
})
export class TodoDirective {

  @Input() appTodo: boolean;
  constructor( private element: ElementRef) {
  }

}
