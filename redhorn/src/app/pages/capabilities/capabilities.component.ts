import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../common/common.service';

@Component({
  selector: 'app-capabilities',
  templateUrl: './capabilities.component.html',
  styleUrls: ['./capabilities.component.scss']
})
export class CapabilitiesComponent implements OnInit {

  constructor(private CS : CommonService) { }
  observer : any ; 

  options = {
    HeaderBG : '#202938',
    HColor: 'light',
    HStyle: 'transparent'
  }
  
  scroll = (event): void => {
    const mark = document.querySelector('.light_start');

    this.observer = new IntersectionObserver((entries) => {
        console.log(entries);
        if(entries[0].intersectionRatio > 0){
              if(document.body.scrollTop > 1700 || document.documentElement.scrollTop > 1700){
                document.body.style.backgroundColor = "#fff";
              }else {
                document.body.style.backgroundColor = "#202938";
              }
        }else {
              if(document.body.scrollTop > 1700 || document.documentElement.scrollTop > 1700){
                document.body.style.backgroundColor = "#fff";
              }else {
                document.body.style.backgroundColor = "#202938";
              }
        }
    });

    this.observer.observe(mark);
  };

  ngOnInit(): void {
    document.body.style.backgroundColor = "#202938";
    this.CS.page_options(this.options);
    window.addEventListener('scroll', this.scroll, true); //third parameter
  }
  ngOnDestroy() {
    document.body.style.backgroundColor = "";
    window.removeEventListener('scroll', this.scroll, true);
  }

}
