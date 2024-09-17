import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { JuegosService } from '../../services/juegos.service';

@Component({
  selector: 'app-juegos-detalles',
  standalone: true,
  imports: [],
  templateUrl: './juegos-detalles.component.html',
  styleUrl: './juegos-detalles.component.css'
})
export class JuegosDetallesComponent {
  servicio = inject(JuegosService);
  ruta = inject(ActivatedRoute);
  juego: any;

  ngOnInit() {
    this.ruta.params.subscribe(params => {
      let id = params['id'];
      this.servicio.getJuegoslID(id).subscribe(juego => {
        this.juego = juego;
      });
    });
  }
}
