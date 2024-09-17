import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersonalService } from '../../services/personal.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-personal-editar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './personal-editar.component.html',
  styleUrl: './personal-editar.component.css'
})
export class PersonalEditarComponent {
  id: any;
  nombre: string = "";
  apellido: string = "";
  domicilio: string = "";

  ruta = inject(ActivatedRoute);
  servicio = inject(PersonalService);

  ngOnInit() {
    this.ruta.params.subscribe(params => {
      let id = params['idPersonal'];
      console.log('ID del personal:', id); 
      this.servicio.getPersonalID(id).subscribe(personal => {
        this.id = personal.id;
        this.nombre = personal.nombre;
        this.apellido = personal.apellido;
        this.domicilio = personal.domicilio;
      });
    });
  }

  editar(data: NgForm) {
    const personal = data.value;
    personal.id = this.id;
    this.servicio.putPersonal(personal).subscribe(() => {
      alert("Personal editado");
      window.location.href = "personal";
    });
  }
}