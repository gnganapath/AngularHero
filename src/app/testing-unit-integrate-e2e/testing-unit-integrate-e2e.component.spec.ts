import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingUnitIntegrateE2eComponent } from './testing-unit-integrate-e2e.component';

describe('TestingUnitIntegrateE2eComponent', () => {
  let component: TestingUnitIntegrateE2eComponent;
  let fixture: ComponentFixture<TestingUnitIntegrateE2eComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestingUnitIntegrateE2eComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingUnitIntegrateE2eComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
