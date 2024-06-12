import { Routes } from '@angular/router';
import { FormsComponent } from './components/form/form.component';
import { FormGroupComponent } from './components/form-group/form-group.component';

export const routes: Routes = [
  {
    path: 'form',
    component: FormsComponent
  },
  {
    path: 'form-group',
    component: FormGroupComponent
  }
];
