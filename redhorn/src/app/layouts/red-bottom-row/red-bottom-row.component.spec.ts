import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RedBottomRowComponent } from './red-bottom-row.component';

describe('RedBottomRowComponent', () => {
  let component: RedBottomRowComponent;
  let fixture: ComponentFixture<RedBottomRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RedBottomRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RedBottomRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
