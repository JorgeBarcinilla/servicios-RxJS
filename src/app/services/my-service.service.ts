import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  private count = 0;
  clickEvent = new Subject<string>();
  private datos = [
    {
      nombre: 'Jorge',
      edad: 26
    },
    {
      nombre: 'Luis',
      edad: 27
    },
    {
      nombre: 'Pablo',
      edad: 28
    }

  ]

  constructor() { }

  public clickButton(texto:string){
    this.count ++
    this.clickEvent.next(texto + ' ' + this.count)
  }

  public obtenerEventoClickButton(){
    return this.clickEvent.asObservable()
  }

  public obtenerDatos(is_dev?: boolean){
    return is_dev ?  'Estamos en modo desarrollo' : this.datos;
  }



}

function* idMaker(){
  var index = 0;
  while(index < 3)
    yield index++;
}