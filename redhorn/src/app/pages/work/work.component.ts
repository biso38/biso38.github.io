import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common/common.service';

@Component({
  selector: 'app-work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit {

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
