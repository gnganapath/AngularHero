import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DevtoolsI18nComponent } from './devtools-i18n.component';

describe('DevtoolsI18nComponent', () => {
  let component: DevtoolsI18nComponent;
  let fixture: ComponentFixture<DevtoolsI18nComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DevtoolsI18nComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DevtoolsI18nComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
