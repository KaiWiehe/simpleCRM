import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditUserHeaderComponent } from './edit-user-header.component';

describe('EditUserHeaderComponent', () => {
  let component: EditUserHeaderComponent;
  let fixture: ComponentFixture<EditUserHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditUserHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditUserHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
