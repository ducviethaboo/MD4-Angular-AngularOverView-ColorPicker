import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colorpick',
  templateUrl: './colorpick.component.html',
  styleUrls: ['./colorpick.component.css']
})
export class ColorpickComponent implements OnInit {

  background = '#00e067';
  constructor() { }

  ngOnInit() {
  }

  onChange(value:any) {
    this.background = value;
  }

}
