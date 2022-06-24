import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.scss']
})
export class PruebaComponent implements OnInit {

  datos: any
  texto:string = ''

  constructor(private myService: MyServiceService){
    this.datos = this.myService.obtenerDatos()
  }

  ngOnInit(): void {
    this.myService.obtenerEventoClickButton().subscribe((texto) => {
      this.texto = texto
    })
  }

}
