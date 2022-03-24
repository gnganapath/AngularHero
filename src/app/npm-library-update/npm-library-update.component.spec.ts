import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NpmLibraryUpdateComponent } from './npm-library-update.component';

describe('NpmLibraryUpdateComponent', () => {
  let component: NpmLibraryUpdateComponent;
  let fixture: ComponentFixture<NpmLibraryUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NpmLibraryUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NpmLibraryUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
