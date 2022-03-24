import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TypescriptWebpackComponent } from './typescript-webpack.component';

describe('TypescriptWebpackComponent', () => {
  let component: TypescriptWebpackComponent;
  let fixture: ComponentFixture<TypescriptWebpackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TypescriptWebpackComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TypescriptWebpackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
