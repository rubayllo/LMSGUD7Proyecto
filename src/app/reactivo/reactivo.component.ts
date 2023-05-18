import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactivo',
  templateUrl: './reactivo.component.html',
  styleUrls: ['./reactivo.component.css'],
})


export class ReactivoComponent {

  alumnos: any[] = [];
  alumnosForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.alumnosForm = this.fb.group({
      nombre: ['', Validators.required],
      ap1: ['', Validators.required],
      ap2: ['', Validators.required],
      numero: ['', Validators.required],
    });
  }

  addAlumno() {
    let nombre = this.alumnosForm.value.nombre;
    let apellido1 = this.alumnosForm.value.ap1;
    let apellido2 = this.alumnosForm.value.ap2;
    let tfno = this.alumnosForm.value.numero;

    this.alumnos.push({
      nombre: nombre,
      apellido1: apellido1,
      apellido2: apellido2,
      tfno: tfno});

      this.alumnosForm.value.nombre = '';
      this.alumnosForm.value.ap1 = '';
      this.alumnosForm.value.ap2 = '';
      this.alumnosForm.value.numero = '';
  }




  borrar(posicion: number) {
    this.alumnos.splice( posicion, 1);
  }
}
