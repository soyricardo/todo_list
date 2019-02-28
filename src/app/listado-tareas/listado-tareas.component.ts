import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'listado-tareas',
  templateUrl: './listado-tareas.component.html',
  styleUrls: ['./listado-tareas.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({ transform: 'translateX(0)' })),
      transition('void => *', [
        style({ transform: 'translateX(-100%)' }),
        animate(600)
      ]),
      transition('* => void', [
        animate(1200, style({ opacity: 0 }))
      ])
    ])
  ]
  
})
export class ListadoTareasComponent implements OnInit {
  @Input() arrData;
  @Output() fueraTarea = new EventEmitter();
  // @Output() modificarTarea = new EventEmitter();
  @Output() alternarCompletada = new EventEmitter();
  @Output() modificarTarea = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }
  destruirTarea(id) {
    this.fueraTarea.emit(id);
  }

  editarTarea(task) {
    console.log(task)
    this.modificarTarea.emit({id: task.id,text: task.editing});
    
    task.editing = '';
  }
  toggleEditing(task){
    console.log(task)

    task.editing = task.editing ? '': task.text ;
  }

  emitirCambioCompletada(id) {
    this.alternarCompletada.emit(id);
  }

}
