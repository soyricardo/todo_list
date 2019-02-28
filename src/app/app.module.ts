import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CrearTareaComponent } from './crear-tarea/crear-tarea.component';
import { ListadoTareasComponent } from './listado-tareas/listado-tareas.component';
import { FiltrarTareasComponent } from './filtrar-tareas/filtrar-tareas.component';
import { FechaSistemaComponent } from './fecha-sistema/fecha-sistema.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    CrearTareaComponent,
    ListadoTareasComponent,
    FiltrarTareasComponent,
    FechaSistemaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
