import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule, FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-group',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RecaptchaModule, RecaptchaFormsModule],
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnInit {
  form: FormGroup;
  captchaValid: boolean = false;

  constructor(private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {}

  resolved(captchaResponse: string | null) {
    this.captchaValid = captchaResponse !== null && captchaResponse.length > 0;
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: new FormControl('', Validators.required),
      date: new FormControl('', Validators.required),
      text: new FormControl('', [Validators.required, Validators.maxLength(200)]),
      category: new FormControl('', Validators.required),
      gender: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

  save(event: Event) {
    event.preventDefault();
    if (this.form.valid && this.captchaValid) {
      const datosFormulario = this.form.value;
      console.log(datosFormulario);
      Swal.fire({
        title: 'Éxito',
        text: 'Los datos se enviaron correctamente.',
        icon: 'success',
        confirmButtonText: 'OK'
      });
      this.form.reset(); // Reiniciar el formulario
      this.captchaValid = false; // Reiniciar el estado del captcha
    } else {
      this.form.markAllAsTouched();
    }
  }
}
