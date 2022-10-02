import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HichartComponent } from './hichart.component';

describe('HichartComponent', () => {
  let component: HichartComponent;
  let fixture: ComponentFixture<HichartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HichartComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HichartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
