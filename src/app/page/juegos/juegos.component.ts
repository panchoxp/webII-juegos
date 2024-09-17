import { Component, inject, OnInit } from '@angular/core';
import { JuegosService } from '../../services/juegos.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para ngModel

@Component({
  selector: 'app-juegos',
  standalone: true,
  imports: [CommonModule, RouterLink, FormsModule],
  templateUrl: './juegos.component.html',
  styleUrls: ['./juegos.component.css']
})
export class JuegosComponent implements OnInit {
  servicio = inject(JuegosService);
  juegos: any[] = [];
  rangoSeleccionado: string = '';

  ngOnInit() {
    this.servicio.getJuegos().subscribe(p => {
      this.juegos = p;
    });
  }

  get juegosFiltrados() {
    return this.juegos.filter(j => this.filtrarPorRango(j.precio));
  }

  filtrarPorRango(precio: number): boolean {
    if (!this.rangoSeleccionado) {
      return true;
    }

    const [min, max] = this.rangoSeleccionado.split('-').map(Number);
    return precio >= min && precio <= max;
  }
}
