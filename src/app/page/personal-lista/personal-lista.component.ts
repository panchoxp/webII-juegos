import { Component, inject } from '@angular/core';
import { PersonalService } from '../../services/personal.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-personal-lista',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './personal-lista.component.html',
  styleUrl: './personal-lista.component.css'
})
export class PersonalListaComponent {

  servicio = inject(PersonalService);
  personal: any[] = [];

  ngOnInit() {
    this.servicio.getPersonal().subscribe(p => {
      this.personal = p;
    });
  }
  eliminar(id: any): void {
    this.servicio.deletePersonal(id).subscribe(() => {
      this.personal = this.personal.filter(personal => personal.id !== id);
    });
  }
}
