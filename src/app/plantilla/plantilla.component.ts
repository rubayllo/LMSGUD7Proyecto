import { Component } from '@angular/core';

@Component({
  selector: 'app-plantilla',
  templateUrl: './plantilla.component.html',
  styleUrls: ['./plantilla.component.css']
})
export class PlantillaComponent {

  alumnos: any[] = [];

  addAlumno(nombre: string, ap1: string, ap2: string, telefono: number) {
    this.alumnos.push({
      nombre: nombre,
      apellido1: ap1,
      apellido2: ap2,
      tfno: telefono});
  }

  borrar( posicion: number ) {
    this.alumnos.splice( posicion, 1);
  }

}

