import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor( private router: Router) { }

  page_options(options : any){
    let BG = options.HeaderBG ;
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
      document.getElementById("header").style.backgroundColor = '' ;
      document.getElementById("header").classList.add("transparent");
    }else {
      document.getElementById("header").classList.remove("transparent");
      document.getElementById("header").style.backgroundColor = '' ;
    }
    if(options.HStyle == "normal"){
      document.getElementById("header").classList.add("normal");
      document.getElementById("header").style.backgroundColor = BG ;
    }else {
      document.getElementById("header").style.backgroundColor = '' ;
      document.getElementById("header").classList.remove("normal");
    }
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scroll({
        top: 0, 
        left: 0, 
        behavior: 'smooth'
      });
    });
  }
}
