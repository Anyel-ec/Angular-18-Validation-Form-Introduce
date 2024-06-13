import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formulario } from './form.model';

const baseUrl = 'http://localhost:8080/api/formularios';

@Injectable({
  providedIn: 'root'
})
export class FormService {
  // parametro de Http para realizar peticiones HTTP
  constructor(private http: HttpClient) { }
  // metodo para guardar el formulario
  saveForm(data: Formulario): Observable<any> {
    // peticion POST al servidor
    return this.http.post(baseUrl, data);
  }
}
