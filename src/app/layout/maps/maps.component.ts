import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  title: string = 'Meu primeiro projeto?';
  lat: number = 51.678418;
  lng: number = 7.809007;
  local = '';

  constructor() { }

  ngOnInit() {
    
  }

  public getCoords() {
    if( this.local == ''){
      alert('Not to showwingg');
    } else {
      alert(this.local)
    }
  }

}
