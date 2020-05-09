import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  scroll = (event): void => {
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
      document.getElementById("header").classList.add("sticky");
    }else {
      document.getElementById("header").classList.remove("sticky");
    }
  };
  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true); //third parameter
  }
  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

}