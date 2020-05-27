import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common/common.service';

@Component({
  selector: 'app-case-study',
  templateUrl: './case-study.component.html',
  styleUrls: ['./case-study.component.scss']
})
export class CaseStudyComponent implements OnInit {

  constructor(private CS: CommonService) { }

  options = {
    HeaderBG : '#fff',
    HColor: 'dark',
    HStyle: 'normal'
  }

  ngOnInit(): void {
    this.CS.page_options(this.options);
  }

}
