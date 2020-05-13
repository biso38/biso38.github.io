import { Component, OnInit, Renderer2 } from '@angular/core';
import { CommonService } from '../../common/common.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  constructor(private CS : CommonService, private renderer: Renderer2) { }

  options = {
    HeaderBG : '#fff',
    HColor: 'dark',
    HStyle: 'normal'
  }
  
  public animate({ target, visible }: { target: Element; visible: boolean }): void {
      this.renderer.addClass(target, visible ? 'done_animate' : 'inactive');
      // this.renderer.removeClass(target, visible ? 'inactive' : 'done_animate');
  }
  ngOnInit(): void {
    this.CS.page_options(this.options);
  }

}
