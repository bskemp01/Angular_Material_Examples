import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { PageTypes } from 'src/app/models/pageTypes.model';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-mat-tool-bar',
  templateUrl: './mat-tool-bar.component.html',
  styleUrls: ['./mat-tool-bar.component.scss'],
})
export class MatToolBarComponent {
  get PageTypes() {
    return PageTypes;
  }

  private readonly linkedInURL =
    'https://www.linkedin.com/in/brian-kemp-94036723a/';

  constructor(private router: Router, private routingService: RoutingService) {}

  navigateToLinkedIn() {
    window.open(this.linkedInURL);
  }

  navigateToPage(pageType: PageTypes) {
    this.routingService.navigateRoutes(pageType);
  }
}
