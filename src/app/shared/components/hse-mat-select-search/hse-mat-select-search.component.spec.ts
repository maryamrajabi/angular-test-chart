import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HseMatSelectSearchComponent } from './hse-mat-select-search.component';

describe('HseMatSelectSearchComponent', () => {
  let component: HseMatSelectSearchComponent;
  let fixture: ComponentFixture<HseMatSelectSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HseMatSelectSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HseMatSelectSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
