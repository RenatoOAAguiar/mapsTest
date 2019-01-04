import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  title: string = 'Meu primeiro projeto?';
  lat: number = -16.6902082;
  lng: number = -49.2759025;
  local = '';
  zoom: number = 13;

  markers = [
	  {
		  lat: -16.6902082,
		  lng: -49.2759025,
		  label: 'A',
		  draggable: true
	  },
	  {
		  lat: -16.7103527,
		  lng: -49.3127187,
		  label: 'B',
		  draggable: false
	  },
	  {
		  lat: -16.7076654,
		  lng: -49.2753152,
		  label: 'C',
		  draggable: true
	  }
  ]

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

  clickedMarker(label: string, index: number) {
    console.log(`clicked the marker: ${label || index}`)
  }

}

