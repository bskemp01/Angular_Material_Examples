import { Component } from '@angular/core';
import { mockTextData } from 'src/app/mocks/mat-tab-data.mock';
import { MockTextData } from 'src/app/models/mockTextData.model';

@Component({
  selector: 'app-mat-tab',
  templateUrl: './mat-tab.component.html',
  styleUrls: ['./mat-tab.component.scss']
})
export class MatTabsComponent {
  mockTextData: MockTextData[] = mockTextData
}
