import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assigment2',
  templateUrl: './assigment2.component.html',
  styleUrls: ['./assigment2.component.css'],
})
export class Assigment2Component {
  showSecret: boolean = false;
  log = [];

  constructor() {}

  onToggle() {
    this.showSecret = !this.showSecret;
    this.log.push(this.log.length + 1);
  }
}
