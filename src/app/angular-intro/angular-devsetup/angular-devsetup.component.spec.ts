import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDevsetupComponent } from './angular-devsetup.component';

describe('AngularDevsetupComponent', () => {
  let component: AngularDevsetupComponent;
  let fixture: ComponentFixture<AngularDevsetupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularDevsetupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDevsetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
