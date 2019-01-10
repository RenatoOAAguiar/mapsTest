import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
/// <reference types="@types/googlemaps" />
import { } from 'googlemaps';
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
    href: '/assets/img/casa.jpg'
  }, {
    url: '/assets/img/casa1.jpg',
    href: '/assets/img/casa1.jpg'
  }]

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

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    this.searchControl = new FormControl();

    //set current position
    this.setCurrentPosition();

    this.mapsAPILoader.load().then(() => {
      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
        types: ["address"]
      });
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {
          //get the place result
          let place: google.maps.places.PlaceResult = autocomplete.getPlace();

          //verify result
          if (place.geometry === undefined || place.geometry === null) {
            return;
          }

          //set latitude, longitude and zoom
          this.latitude = place.geometry.location.lat();
          this.longitude = place.geometry.location.lng();
          this.zoom = 12;
        });
      });
    });
  }

  private setCurrentPosition() {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 12;
      });
    }
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

