import { Component, OnInit } from '@angular/core';
import { DemoService } from '../demo.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  title="Demo Application"
  demoarray;
  constructor(arrayservice:DemoService) { 
    //let arrayservice = new DemoService();
    this.demoarray = arrayservice.getArrayElements();
  }

  ngOnInit(): void {
  }

}
