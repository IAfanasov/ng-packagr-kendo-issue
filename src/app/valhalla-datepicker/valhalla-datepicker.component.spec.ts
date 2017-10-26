import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValhallaDatepickerComponent } from './valhalla-datepicker.component';

describe('ValhallaDatepickerComponent', () => {
  let component: ValhallaDatepickerComponent;
  let fixture: ComponentFixture<ValhallaDatepickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValhallaDatepickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValhallaDatepickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
