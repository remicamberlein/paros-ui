import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreerTrtComponent } from './creer-trt.component';

describe('CreerTrtComponent', () => {
  let component: CreerTrtComponent;
  let fixture: ComponentFixture<CreerTrtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreerTrtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreerTrtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
