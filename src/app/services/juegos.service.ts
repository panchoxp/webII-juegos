import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JuegosService {

  constructor(private http:HttpClient) { }
  private API_JUEGOS='http://localhost:3000/juegos'

  getJuegos(): Observable<any> {
    return this.http.get(this.API_JUEGOS)
  }
  getJuegoslID(id: any):Observable<any>{
    return this.http.get(`${this.API_JUEGOS}/${id}`)
  }
}