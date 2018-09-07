import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'cb-info-block',
  templateUrl: './animated-block.component.html',
  styleUrls: ['./animated-block.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
      })),
      state('hide', style({
        opacity: 0,
      })),
      transition('hide => show', animate('700ms ease-in-out')),
    ]),
  ],
})
export class AnimatedBlockComponent implements OnInit {
  state = 'hide';

  constructor(public element: ElementRef) { }

  ngOnInit() {
  }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const componentPosition = this.element.nativeElement.offsetTop;
      const scrollPosition = window.pageYOffset + window.screen.height / 1.5;

      if (scrollPosition >= componentPosition) {
        this.state = 'show';
      }
    }
}
