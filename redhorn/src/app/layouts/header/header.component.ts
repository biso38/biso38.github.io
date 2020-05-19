import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) { }

  hidden = true ; 
  visable = false ; 
  Menu(){
      if(this.hidden == true){
        this.hidden = false ; 
        this.visable = true ;
      }else {
        this.hidden = true ; 
        this.visable = false ; 
      }
  }
  onClickedOutside(e: Event) {
    if(this.hidden == false && this.visable == true && e.target != document.getElementById("menu_button")){
      if(e.target != document.getElementById("menu_button_icon")){
        this.hidden = true ; 
        this.visable = false ; 
      }
    }
  }
  scroll = (event): void => {
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
      document.getElementById("header").classList.add("sticky");
    }else {
      document.getElementById("header").classList.remove("sticky");
    }
  };
  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true); //third parameter
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      this.hidden = true ; 
      this.visable = false ; 
    });
  }
  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

}