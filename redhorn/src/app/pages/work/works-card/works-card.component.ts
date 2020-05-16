import { Component, OnInit } from '@angular/core';
import{WorksCard} from '../works-card.model'
@Component({
  selector: 'app-works-card',
  templateUrl: './works-card.component.html',
  styleUrls: ['./works-card.component.scss']
})
export class WorksCardComponent implements OnInit {
  WorksCard: WorksCard[] = [
    new WorksCard('Huvr', 'The whole shebang helping put millions of dollars into their sales pipeline', 'assets/images/huvr-thumbnail.png'),
    new WorksCard('Primo Chalk', 'Website redesign to help paid media conversions.', 'assets/images/huvr-thumbnail.png')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
