import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  getarray():string[]{
    return["rose", "lily", "jasmine", "sunflower"];
  }

  constructor() { }
}
