import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormGroupComponent } from './components/form-group/form-group.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormGroupComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'validation_form';
}
