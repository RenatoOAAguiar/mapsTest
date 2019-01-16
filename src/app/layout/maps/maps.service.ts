import { Injectable } from '@angular/core';

@Injectable()
export class MapsService {

  constructor() { }

  public obj: any;

  public setObj(obj){
    this.obj = obj;
  }

  public getObj(){
    return this.obj;
  }
}
