import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosDetallesComponent } from './juegos-detalles.component';

describe('JuegosDetallesComponent', () => {
  let component: JuegosDetallesComponent;
  let fixture: ComponentFixture<JuegosDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JuegosDetallesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JuegosDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
