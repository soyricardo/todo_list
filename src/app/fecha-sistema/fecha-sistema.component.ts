import { Component, Input, OnInit  } from '@angular/core';
import { User } from './user.model';

@Component({
  selector: 'app-fecha-sistema',
  templateUrl: './fecha-sistema.component.html',
  styleUrls: ['./fecha-sistema.component.css']
})
export class FechaSistemaComponent {
  // fechaSistema = new Date(); 
//   let hour = horaActualizada (fechaSistema) {
  

//   setTimeout(function() {
//     fechaSistema = new Date(); 
    
//   }, 1000);
// }

 
  @Input('user') 
  user:User;
  ocultarData: boolean = true;
  constructor() {}

  ocultarInfo() {
    this.ocultarData = !this.ocultarData;
  }

  ngOnInit() {
   
  }
  

}
