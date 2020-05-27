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
<<<<<<< HEAD
=======
  
>>>>>>> 1e124f79dbe13aa5e459ae51c832ce03860ab2ac
  ngOnInit(): void {
    this.CS.page_options(this.options);
  }

}
