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
    // this.animation_function_left();
    // this.animation_function_right();
    // this.animation_function_FromBottom();
    // this.animation_function_FromTop();
  }
  animation_function_left(){
    const images = document.querySelectorAll('.fromleftfadeanimation');
    this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            console.log(entry);
            if(entry.intersectionRatio > 0) {
                if(!entry.target.classList.contains('done_animate')){
                    entry.target.classList.add('done_animate');
                    (<HTMLElement>entry.target).style.animation = `animateFromLeft 1s ease-out`;
                }
            }
            // else {
            //   (<HTMLElement>entry.target).style.animation = 'none';
            // }
        });
    }, );
    images.forEach(image => {
        this.observer.observe(image);
    });
  }
  animation_function_right(){
    const images = document.querySelectorAll('.fromrightfadeanimation');
    this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // console.log(entry);
            if(entry.intersectionRatio > 0) {
                if(!entry.target.classList.contains('done_animate')){
                    entry.target.classList.add('done_animate');
                    (<HTMLElement>entry.target).style.animation = `animateFromRight 1s ease-out`;
                }
            }
        });
    }, );
    images.forEach(image => {
        this.observer.observe(image);
    });
  }
  animation_function_FromBottom(){
    const images = document.querySelectorAll('.frombottomfadeanimation');
    this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // console.log(entry);
            if(entry.intersectionRatio > 0) {
                if(!entry.target.classList.contains('done_animate')){
                    entry.target.classList.add('done_animate');
                    (<HTMLElement>entry.target).style.animation = `animateFromBottom 1s ease-out`;
                }
            }
        });
    }, );
    images.forEach(image => {
        this.observer.observe(image);
    });
  }
  animation_function_FromTop(){
    const images = document.querySelectorAll('.fromtopfadeanimation');
    this.observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // console.log(entry);
            if(entry.intersectionRatio > 0) {
                if(!entry.target.classList.contains('done_animate')){
                    entry.target.classList.add('done_animate');
                    (<HTMLElement>entry.target).style.animation = `animateFromTop 1s ease-out`;
                }
            }
        });
    }, );
    images.forEach(image => {
        this.observer.observe(image);
    });
  }
}
