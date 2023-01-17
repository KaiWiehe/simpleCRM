import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogEditUserHeaderComponent } from './dialog-edit-user-header.component';

describe('DialogEditUserHeaderComponent', () => {
  let component: DialogEditUserHeaderComponent;
  let fixture: ComponentFixture<DialogEditUserHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogEditUserHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DialogEditUserHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
