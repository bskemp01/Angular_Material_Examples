import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { PageTypes } from '../models/pageTypes.model';

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor(private router: Router,) { }

  navigateRoutes(route: string) {

    switch (route) {
      case PageTypes.MatTabs:
        this.router.navigate(['/mat-tabs']);
        break;
      case PageTypes.Forms:
        this.router.navigate(['/forms']);
        break;
      default:
        this.router.navigate(['/mat-tabs']);
        break;
    }
  }
}
