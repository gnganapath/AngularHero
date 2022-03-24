import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SecurityOwaspProdbuildComponent } from './security-owasp-prodbuild.component';

describe('SecurityOwaspProdbuildComponent', () => {
  let component: SecurityOwaspProdbuildComponent;
  let fixture: ComponentFixture<SecurityOwaspProdbuildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SecurityOwaspProdbuildComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SecurityOwaspProdbuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
