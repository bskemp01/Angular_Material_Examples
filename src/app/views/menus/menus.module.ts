import { NgModule } from '@angular/core';
import { CommonModule, NgFor } from '@angular/common';
import { MenusComponent } from './menus.component';
import { Routes, RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatListModule } from '@angular/material/list';

const routes: Routes = [
  {
    path: '',
    component: MenusComponent,
  },
];

@NgModule({
  declarations: [MenusComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatCheckboxModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    NgFor,
    RouterModule.forChild(routes),
  ],
})
export class MenusModule {}
