import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators, FormsModule } from '@angular/forms';
import { debounceTime } from 'rxjs';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule], // add ReactiveFormsModule and CommonModule
  templateUrl: './form.component.html',
  styleUrl: './form.component.scss'
})
export class FormsComponent {
  
  // validar que el campo sea requerido, que sea un email y que tenga al menos 10 caracteres
  emailCtrl = new FormControl('', [Validators.required, Validators.email, Validators.minLength(10)]);
  // create constructor
  constructor() {
    this.emailCtrl.valueChanges.pipe(
    debounceTime(400) // espera 400ms para emitir el valor
    ).subscribe(value => console.log(value)) // imprime el valor en consola
  }

  // obtener el valor del campo email
  getEmail(event: Event){
    event.preventDefault();
    console.log(this.emailCtrl.value);
  }

}
