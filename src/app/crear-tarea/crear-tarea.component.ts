import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrls: ['./crear-tarea.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(100%)' }),
        animate(1200)
      ]),
      transition('* => void', [
        animate(1200, style({ transform: 'translateX(-100%)' }))
      ])
    ])
  ]
})
export class CrearTareaComponent implements OnInit {
  @Output() nuevaTarea = new EventEmitter();
  newTareaText = '';
  handleKeyup(ev) {
    //let newTareaText = ev.target.value.trim();
    console.log('keyup event fired!!!')

    //compruebo si está vacío el input del user
    //if (ev.keyCode === 13 && newTareaText !== '') {
    if (ev.keyCode === 13 && this.newTareaText.trim() !== '') {
      console.log('La tarea para add:', this.newTareaText);
      //this.tareas.push(ev.target.value);
      //this.tareas.push(ev.target.value);
      this.nuevaTarea.emit(this.newTareaText.trim());
      //ev.target.value = '';
      this.newTareaText = '';
    }
  } 

  btnAdd(ev) {
    // Para que NO se añada nada cuando se hace click en campo "añadir tarea" vacío
    if (this.newTareaText.trim() !== '') {
      console.log('La tarea para add:', this.newTareaText);
    this.nuevaTarea.emit(this.newTareaText.trim());
    this.newTareaText = '';
    }
  }
  
  
  constructor() { }

  ngOnInit() { }

}
