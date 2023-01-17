import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditBirthDateComponent } from './dialog-edit-birth-date.component';

describe('DialogEditBirthDateComponent', () => {
  let component: DialogEditBirthDateComponent;
  let fixture: ComponentFixture<DialogEditBirthDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditBirthDateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditBirthDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
