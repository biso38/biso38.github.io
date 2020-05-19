import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor( private router: Router) { }

  observer : any ; 

  config = {
    root: null, 		// sets the framing element to the viewport
    rootMargin: '0px',
    threshold: 0.5
  };

  page_options(options : any){
    let BG = options.HeaderBG ;
    let StickyBG = options.StickyBG ;
    // Header color
    if(options.HColor == 'dark'){
      document.getElementById("header").classList.add("dark");
    }else {
      document.getElementById("header").classList.remove("dark");
    }
    if(options.HColor == 'light'){
      document.getElementById("header").classList.add("light");
    }else {
      document.getElementById("header").classList.remove("light");
    }
    // Heade style 
    if(options.HStyle == "transparent"){
      document.getElementById("header").style.backgroundColor = BG ;
    }else {
      document.getElementById("header").style.backgroundColor = '#fff' ;
    }
    if(options.HStyle == "normal"){
      document.getElementById("header").classList.add("normal");
      document.getElementById("header").style.backgroundColor = BG ;
    }else {
      document.getElementById("header").classList.remove("normal");
    }
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      scroll(0,0);
    });
  }

}
