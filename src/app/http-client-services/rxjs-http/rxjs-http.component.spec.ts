import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsHttpComponent } from './rxjs-http.component';

describe('RxjsHttpComponent', () => {
  let component: RxjsHttpComponent;
  let fixture: ComponentFixture<RxjsHttpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsHttpComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsHttpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
