import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormcrudComponent } from './formcrud.component';

describe('FormcrudComponent', () => {
  let component: FormcrudComponent;
  let fixture: ComponentFixture<FormcrudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormcrudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormcrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
