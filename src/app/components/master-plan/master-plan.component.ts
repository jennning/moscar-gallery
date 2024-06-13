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
      color: '#a4dfff'
    },
    {
      id: 'B',
      color: '#ffde92'
    },
    {
      id: 'C',
      color: '#f0c2e8'
    },
    {
      id: 'D',
      color: '#c6e9c1'
    }
  ];
}
