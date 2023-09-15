import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'mat-tabs',
    loadChildren: () =>
      import('./views/mat-tabs/mat-tab.module').then((m) => m.MatTabModule),
  },
  {
    path: 'forms',
    loadChildren: () =>
      import('./views/forms/form.module').then((m) => m.FormModule),
  },
  {
    path: 'menus',
    loadChildren: () =>
      import('./views/menus/menus.module').then((m) => m.MenusModule),
  },
  {
    path: '**',
    redirectTo: 'mat-tabs',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
