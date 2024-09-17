import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalCrearComponent } from './personal-crear.component';

describe('PersonalCrearComponent', () => {
  let component: PersonalCrearComponent;
  let fixture: ComponentFixture<PersonalCrearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PersonalCrearComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PersonalCrearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
