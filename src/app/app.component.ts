import { Component } from '@angular/core';
import { Tarea } from './atributos.interface';
import { User } from './fecha-sistema/user.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  //tareas = [];
  user: User;
  
  tareas: Array<Tarea> = [{ text: 'Tarea de muestra', id: 0, completada: true }];
  //tareasFiltradas: Array<Tarea> = this.tareas;
  //query: string = '';
    constructor() {
      this.user = new User();
      this.user.name = "Ricardo A. M.";
      this.user.title = "ToDo List - V. 1.0.1 - GeeksHubs";
      this.user.academic = "Ingeniero de Teleco, Árbitro de fútbol y futuro Full Stack Developer";
      this.user.phone = 6567890136;
      this.user.hobbies = ['Jugal al fútbol', 'jugar al padel', 'viajar por el mundo'];
    }

  addTarea(tareaText) {
    let newTask: Tarea = { text: tareaText, id: Date.now(), completada: false };
    this.tareas.push(newTask);
    // this.filtrarTareas(this.query);
  }
  
  deleteTask(id) {
    this.tareas = this.tareas.filter(tarea => tarea.id !== id )
  }

  changeTarea({id, text}){
    
    this.tareas = this.tareas.map(tarea => {
      if (tarea.id === id) {
        console.log(`texto ${tarea.text} cambia a ${text}`)

        tarea.text = text;
       
        
      }
  
      return tarea;
    });
  }

alternarCompletada(id) {
  console.log("Dentro!");
  this.tareas = this.tareas.map(tarea => {
    if (tarea.id === id) {
      tarea.completada = !tarea.completada;
      console.log("tarea.completada ==> cambio de estado");
      
    }

    return tarea;
  });

}


}