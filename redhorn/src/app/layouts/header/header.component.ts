import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // document.addEventListener('scroll', function() {
    //   if(document.body.scrollTop > 100){
    //     console.log('sticky');
    //   }
    //   if(document.body.scrollHeight == 0){
    //     console.log('top');
    //   }
    // });
  }

}
