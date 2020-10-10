import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  constructor() { }

  @Input('appComplianceLevel') complianceLevel: number;
  @Input('appIncomplianceLevel') incomplianceLevel: number;

  ngOnInit(): void {
  }

}
