import { Component, Inject } from '@angular/core';
import { myDev } from './app.module';
import { MyServiceService } from './services/my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'servicios-RxJS';
  datos: any

  constructor(private myService: MyServiceService, @Inject(myDev) value: {is_dev: boolean}){
    this.datos = this.myService.obtenerDatos(value.is_dev)
  }
}
