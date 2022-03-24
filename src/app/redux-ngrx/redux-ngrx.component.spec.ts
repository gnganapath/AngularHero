import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReduxNgrxComponent } from './redux-ngrx.component';

describe('ReduxNgrxComponent', () => {
  let component: ReduxNgrxComponent;
  let fixture: ComponentFixture<ReduxNgrxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReduxNgrxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReduxNgrxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
