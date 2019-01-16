/// <reference types="@types/googlemaps" />
import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MapsAPILoader } from '@agm/core';

@Component({
  selector: 'app-mapsdirection',
  templateUrl: './mapsdirection.component.html',
  styleUrls: ['./mapsdirection.component.css']
})
export class MapsdirectionComponent implements OnInit {

  public lat: Number = -16.3046545
  public lng: Number = -49.1125028

  public origin: any
  public destination: any

  latitude: number;
  longitude: number;
  public searchControl: FormControl;
  zoom: number = 13;

  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) { }

  ngOnInit() {
    this.getDirection();

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
          //this.latitude = place.geometry.location.lat();
          //this.longitude = place.geometry.location.lng();
          this.destination = {lat: place.geometry.location.lat(), lng: place.geometry.location.lng()}
          this.zoom = 12;
        });
      });
    });
  }

  public getDirection() {
    this.origin = { lat: -16.3046545, lng: -49.1125028 }
    this.destination = { lat: -16.6900755, lng: -49.2772056 }
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
}
