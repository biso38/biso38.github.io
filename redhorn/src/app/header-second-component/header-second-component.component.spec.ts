import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderSecondComponentComponent } from './header-second-component.component';

describe('HeaderSecondComponentComponent', () => {
  let component: HeaderSecondComponentComponent;
  let fixture: ComponentFixture<HeaderSecondComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderSecondComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderSecondComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
