import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAvailComponent } from './view-avail.component';

describe('ViewAvailComponent', () => {
  let component: ViewAvailComponent;
  let fixture: ComponentFixture<ViewAvailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAvailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAvailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
