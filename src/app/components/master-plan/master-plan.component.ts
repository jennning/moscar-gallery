import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-master-plan',
  templateUrl: './master-plan.component.html',
  styleUrls: ['./master-plan.component.scss']
})
export class MasterPlanComponent {
  masterLabels = [
    {
      id: 'A',
      color: '#9bcee6'
    },
    {
      id: 'B',
      color: '#f7cf98'
    },
    {
      id: 'C',
      color: '#deb8d3'
    },
    {
      id: 'D',
      color: '#b9d7b9'
    }
  ];
}
