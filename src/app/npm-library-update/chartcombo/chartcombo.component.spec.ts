import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartcomboComponent } from './chartcombo.component';

describe('ChartcomboComponent', () => {
  let component: ChartcomboComponent;
  let fixture: ComponentFixture<ChartcomboComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartcomboComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChartcomboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
