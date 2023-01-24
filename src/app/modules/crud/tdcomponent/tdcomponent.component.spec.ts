import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TdcomponentComponent } from './tdcomponent.component';

describe('TdcomponentComponent', () => {
  let component: TdcomponentComponent;
  let fixture: ComponentFixture<TdcomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TdcomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TdcomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
