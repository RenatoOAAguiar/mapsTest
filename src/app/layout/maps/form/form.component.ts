import { MapsService } from './../maps.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  public imovel: any;

  constructor(
    private _mapsService: MapsService,
    private router: Router,
  ) { }

  

  ngOnInit() {
      this.imovel = this._mapsService.getObj();
      if(this.imovel == undefined){
        this.router.navigate(['/maps']);
      }
  }

}
