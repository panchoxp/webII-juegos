import { Component } from '@angular/core';
import { PersonalListaComponent } from "../personal-lista/personal-lista.component";
import { PersonalCrearComponent } from "../personal-crear/personal-crear.component";

@Component({
  selector: 'app-personal',
  standalone: true,
  imports: [PersonalListaComponent, PersonalCrearComponent],
  templateUrl: './personal.component.html',
  styleUrl: './personal.component.css'
})
export class PersonalComponent {

}
