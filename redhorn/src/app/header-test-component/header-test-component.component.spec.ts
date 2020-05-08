import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderTestComponentComponent } from './header-test-component.component';

describe('HeaderTestComponentComponent', () => {
  let component: HeaderTestComponentComponent;
  let fixture: ComponentFixture<HeaderTestComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderTestComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderTestComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
