import { Component, inject } from '@angular/core';
import { JuegosService } from '../../services/juegos.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-juegos',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './juegos.component.html',
  styleUrl: './juegos.component.css'
})
export class JuegosComponent {
  servicio = inject(JuegosService);
  juegos: any[] = [];

  ngOnInit() {
    this.servicio.getJuegos().subscribe(p => {
      this.juegos = p;
    });
  }
}