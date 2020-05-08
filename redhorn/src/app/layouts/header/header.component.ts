import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  scrollTest(){
      if(document.body.scrollTop > 100){
        console.log('sticky');
      }
      if(document.body.scrollHeight == 0){
        console.log('top');
      }
  }
  scroll = (event): void => {
    // console.log('scrolling');
    //handle your scroll here
    //notice the 'odd' function assignment to a class field
    //this is used to be able to remove the event listener
  };
  ngOnInit(): void {
    window.addEventListener('scroll', this.scroll, true); //third parameter
 
  }
  ngOnDestroy() {
    window.removeEventListener('scroll', this.scroll, true);
  }

}
