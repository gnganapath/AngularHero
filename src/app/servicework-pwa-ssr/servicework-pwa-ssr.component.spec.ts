import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceworkPwaSsrComponent } from './servicework-pwa-ssr.component';

describe('ServiceworkPwaSsrComponent', () => {
  let component: ServiceworkPwaSsrComponent;
  let fixture: ComponentFixture<ServiceworkPwaSsrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceworkPwaSsrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServiceworkPwaSsrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
