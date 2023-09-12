import { Component } from '@angular/core';

@Component({
  selector: 'app-mat-tool-bar',
  templateUrl: './mat-tool-bar.component.html',
  styleUrls: ['./mat-tool-bar.component.scss'],
})
export class MatToolBarComponent {
  private readonly linkedInURL =
    'https://www.linkedin.com/in/brian-kemp-94036723a/';
    
  navigateToLinkedIn() {
    window.open(this.linkedInURL);
  }
}
