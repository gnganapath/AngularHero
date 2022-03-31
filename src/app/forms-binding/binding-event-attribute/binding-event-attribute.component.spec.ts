import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingEventAttributeComponent } from './binding-event-attribute.component';

describe('BindingEventAttributeComponent', () => {
  let component: BindingEventAttributeComponent;
  let fixture: ComponentFixture<BindingEventAttributeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingEventAttributeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingEventAttributeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
