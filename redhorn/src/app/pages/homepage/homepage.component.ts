import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common/common.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private CS : CommonService) { }

  options = {
    HeaderBG : '#fff',
    HColor: 'dark',
    HStyle: 'normal'
  }
  ngOnInit(): void {
    this.CS.page_options(this.options);
  }

}
