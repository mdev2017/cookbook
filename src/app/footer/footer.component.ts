import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cb-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  currentYear;

  constructor() { }

  ngOnInit() {
    this.currentYear = new Date().getFullYear();
  }

}
