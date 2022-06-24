import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OtherService {

  constructor() { }

  obtenerDatos(){
    return 2;
  }
}
