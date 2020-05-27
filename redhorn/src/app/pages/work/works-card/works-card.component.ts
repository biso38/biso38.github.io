import { Component, OnInit } from '@angular/core';
import{WorksCard} from '../works-card.model'
import { ContentfulService } from '../../../common/contentful.service';
import { Entry } from 'contentful';
@Component({
  selector: 'app-works-card',
  templateUrl: './works-card.component.html',
  styleUrls: ['./works-card.component.scss']
})
export class WorksCardComponent implements OnInit {
  public projects: Entry<any>[] = [];
  WorksCard: WorksCard[] = [
    new WorksCard('Huvr', 'The whole shebang helping put millions of dollars into their sales pipeline', 'assets/images/huvr-thumbnail.png'),
    new WorksCard('Primo Chalk', 'Website redesign to help paid media conversions.', 'assets/images/huvr-thumbnail.png')
  ];
  constructor(private contentfulService: ContentfulService) { }

  ngOnInit(): void {
    this.contentfulService.getProjects()
    .then(projects => this.projects = projects)
  }

}
