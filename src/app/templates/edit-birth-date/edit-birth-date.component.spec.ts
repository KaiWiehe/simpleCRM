import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBirthDateComponent } from './edit-birth-date.component';

describe('EditBirthDateComponent', () => {
  let component: EditBirthDateComponent;
  let fixture: ComponentFixture<EditBirthDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBirthDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditBirthDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
