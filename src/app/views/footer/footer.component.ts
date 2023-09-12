import { Component, OnInit } from '@angular/core';
import {
  NavigationEnd,
  Router,
  Event as NavigationEvent,
} from '@angular/router';
import { Subscription, filter } from 'rxjs';
import { PageTypes } from 'src/app/models/pageTypes.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  get PageTypes() {
    return PageTypes
  }
  currentPage = '';
  private sub: Subscription = new Subscription();

  constructor(private router: Router) {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          this.currentPage = event.url.split('/').pop() ?? '';
        }
      });
  }
}
