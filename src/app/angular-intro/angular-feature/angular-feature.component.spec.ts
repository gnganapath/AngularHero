import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFeatureComponent } from './angular-feature.component';

describe('AngularFeatureComponent', () => {
  let component: AngularFeatureComponent;
  let fixture: ComponentFixture<AngularFeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularFeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularFeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
