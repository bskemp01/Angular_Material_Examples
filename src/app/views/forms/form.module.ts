import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { FormsComponent } from './forms.component';
import { RouterModule, Routes } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

const routes: Routes = [
  {
    path: '',
    component: FormsComponent,
  },
];

@NgModule({
  declarations: [FormsComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    NgFor,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
  ],
})
export class FormModule {}
