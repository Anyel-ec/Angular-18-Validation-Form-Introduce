import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formulario } from './form.model';

const baseUrl = 'http://localhost:8080/api/formularios'; // Replace with your Spring Boot API endpoint

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  saveForm(data: Formulario): Observable<any> {
    return this.http.post(baseUrl, data);
  }
}
