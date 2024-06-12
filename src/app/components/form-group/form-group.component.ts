import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RecaptchaModule, RecaptchaFormsModule } from 'ng-recaptcha';
import Swal from 'sweetalert2';
import { FormService } from '../../form.service'; // Inject your service
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-form-group',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RecaptchaModule, RecaptchaFormsModule, HttpClientModule],
  providers: [FormBuilder, FormService], // Incluir FormBuilder y FormService
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss']
})
export class FormGroupComponent implements OnInit {
  form: FormGroup;
  captchaValid: boolean = false;

  constructor(private formBuilder: FormBuilder, private formService: FormService) {
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
    if (this.form.valid) {
      const datosFormulario = this.form.value;
      console.log(datosFormulario);
      this.formService.saveForm(datosFormulario).subscribe(
        response => {
          Swal.fire({
            title: 'Éxito',
            text: 'Los datos se enviaron correctamente.',
            icon: 'success',
            confirmButtonText: 'OK'
          });
          this.form.reset();
        },
        error => {
          Swal.fire({
            title: 'Error',
            text: 'Hubo un error al enviar los datos.',
            icon: 'error',
            confirmButtonText: 'OK'
          });
          console.error(error);
        }
      );
    } else {
      this.form.markAllAsTouched();
    }
  }
}
