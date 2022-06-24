import { Component, OnInit } from '@angular/core';
import { MyServiceService } from 'src/app/services/my-service.service';

@Component({
  selector: 'app-comparativa-javascript-rxjs',
  templateUrl: './comparativa-javascript-rxjs.component.html',
  styleUrls: ['./comparativa-javascript-rxjs.component.scss']
})
export class ComparativaJavascriptRxjsComponent implements OnInit {



  constructor(private myService : MyServiceService) { }

  ngOnInit(): void {
    let button = document.querySelector('button')
    button?.addEventListener('click',  () =>  this.myService.clickButton('Se hizo click en el boton'))

  }



}
