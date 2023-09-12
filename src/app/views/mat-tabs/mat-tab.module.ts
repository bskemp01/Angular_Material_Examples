import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MatTabsComponent } from './mat-tab.component';
import { MatTabsModule } from '@angular/material/tabs';

const routes: Routes = [
  {
    path: '',
    component: MatTabsComponent,
  },
];

@NgModule({
  declarations: [MatTabsComponent],
  imports: [CommonModule, MatTabsModule, RouterModule.forChild(routes)],
})
export class MatTabModule {}
