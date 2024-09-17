import { Component, inject } from '@angular/core';
import { PersonalService } from '../../services/personal.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-personal-crear',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './personal-crear.component.html',
  styleUrl: './personal-crear.component.css'
})
export class PersonalCrearComponent {
  id: string | undefined;
  nombre: string | undefined;
  apellido: string | undefined;
  domicilio: string | undefined;  

  private PersonalService = inject(PersonalService);

  guardarPersonal(formulario: any) {
    if (formulario.valid) {
      const nuevoUsuario = {
        id: this.id,
        nombre: this.nombre,
        apellido: this.apellido,
        domicilio: this.domicilio
      };

      this.PersonalService.postPersonal(nuevoUsuario).subscribe({
        next: (response) => {
          console.log('Personal guardado', response);
          alert('Personal guardada exitosamente');
          window.location.href = "personal";
        },
        error: (err) => {
          console.error('Error al guardar Personal', err);
          alert('Hubo un error al guardar el Personal');
        }
      });
    }
  }
}