import { Routes } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { PersonalComponent } from './page/personal/personal.component';
import { PersonalEditarComponent } from './page/personal-editar/personal-editar.component';
import { JuegosComponent } from './page/juegos/juegos.component';
import { JuegosDetallesComponent } from './page/juegos-detalles/juegos-detalles.component';
import { UsuarioCrearComponent } from './page/usuario-crear/usuario-crear.component';
import { LoginComponent } from './page/login/login.component';
import { Error403Component } from './page/error403/error403.component';
import { usuariosGuard } from './guards/usuarios.guard';

export const routes: Routes = [
    { path: "home", component: HomeComponent },
    { path: "personal", component: PersonalComponent },
    { path: 'editarPersonal/:idPersonal', component: PersonalEditarComponent },
    { path: "juegos", component: JuegosComponent},
    { path: "juegosDetalles/:id", component: JuegosDetallesComponent, canActivate: [usuariosGuard] },
    { path: 'crearUsuario', component: UsuarioCrearComponent },
    { path: 'login', component: LoginComponent },
    { path: '403', component: Error403Component },
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: '**', component: HomeComponent }
];


