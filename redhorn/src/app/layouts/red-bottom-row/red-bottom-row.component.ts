import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-red-bottom-row',
  templateUrl: './red-bottom-row.component.html',
  styleUrls: ['./red-bottom-row.component.scss']
})
export class RedBottomRowComponent implements OnInit {

  constructor(private renderer: Renderer2) { }

  public animate({ target, visible }: { target: Element; visible: boolean }): void {
    this.renderer.addClass(target, visible ? 'done_animate' : 'inactive');
  }
  ngOnInit(): void {
  }

}
