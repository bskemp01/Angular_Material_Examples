import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PageTypes } from '../models/pageTypes.model';

@Injectable({
  providedIn: 'root',
})
export class RoutingService {
  constructor(private router: Router) {}

  navigateRoutes(route: string) {
    switch (route) {
      case PageTypes.MAT_TABS:
        this.router.navigate(['/mat-tabs']);
        break;
      case PageTypes.FORMS:
        this.router.navigate(['/forms']);
        break;
      case PageTypes.MENUS:
        this.router.navigate(['/menus']);
        break;
      default:
        this.router.navigate(['/mat-tabs']);
        break;
    }
  }
}
