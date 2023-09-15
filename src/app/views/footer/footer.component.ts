import { Component, OnInit } from '@angular/core';
import {
  NavigationEnd,
  Router,
  Event as NavigationEvent,
  NavigationStart,
} from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { PageTypes } from 'src/app/models/pageTypes.model';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  get PageTypes() {
    return PageTypes;
  }
  currentPage: string = PageTypes.MAT_TABS;
  private sub: Subscription = new Subscription();

  constructor(private router: Router, private routingService: RoutingService) {}

  ngOnInit(): void {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.currentPage = event.urlAfterRedirects.split('/').pop() ?? PageTypes.MAT_TABS;         
        }
      });
  }

  prevPage() {
    if (this.currentPage === PageTypes.FORMS) {
      this.routingService.navigateRoutes(PageTypes.MAT_TABS);
    }
    if (this.currentPage === PageTypes.MENUS) {
      this.routingService.navigateRoutes(PageTypes.FORMS);
    }
  }

  nextPage() {
    if (this.currentPage === PageTypes.MAT_TABS) {
      this.routingService.navigateRoutes(PageTypes.FORMS);
    }
    if (this.currentPage === PageTypes.FORMS) {
      this.routingService.navigateRoutes(PageTypes.MENUS);
    }
  }
}
