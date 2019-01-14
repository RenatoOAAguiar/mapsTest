import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
/// <reference types="@types/googlemaps" />
import { MapsAPILoader } from '@agm/core';

declare var $:any;
@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  title: string = 'Meu primeiro projeto?';
  lat: number = -16.6902082;
  lng: number = -49.2759025;
  latitude: number;
  longitude: number;
  local = '';
  public searchControl: FormControl;
  zoom: number = 13;
  ms_event: string = '';
  imageUrlArray = [{
    url: '/assets/img/casa.jpg',
    clickAction: this.imageView(),
  }, {
    url: '/assets/img/casa1.jpg',
    clickAction: this.imageView(),
  }]

  markers = [
	  {
		  lat: -16.6902082,
		  lng: -49.2759025,
		  label: 'A',
      draggable: true,
      id: 1
	  },
	  {
		  lat: -16.7103527,
		  lng: -49.3127187,
		  label: 'B',
      draggable: false,
      id: 2
	  },
	  {
		  lat: -16.7076654,
		  lng: -49.2753152,
		  label: 'C',
      draggable: true,
      id: 3
	  }
  ]

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
  }

  private imageView() {
    alert("Em construção!")
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

  public mouseEnter(valor) {
      this.ms_event = valor;
  }

}

export interface IImage {
  url: string | null;
  href?: string;
  clickAction?: Function;
  caption?: string;
  title?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  backgroundRepeat?: string;
}

