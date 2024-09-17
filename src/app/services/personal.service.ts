import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalService {
  constructor(private http: HttpClient) { }

  private API_PERSONAL = "http://localhost:3000/personal"
    //get
    getPersonal(): Observable<any> {
      return this.http.get(this.API_PERSONAL)
    }
    getPersonalID(id: any):Observable<any>{
      return this.http.get(`${this.API_PERSONAL}/${id}`)
    }

  //post
  postPersonal(item: any): Observable<any> {
    return this.http.post(this.API_PERSONAL, item)
  }
  //put-editar
  putPersonal(item:any): Observable<any> {
    return this.http.put(`${this.API_PERSONAL}/${item.id}`,item)
  }

  //DELETE
  deletePersonal(id:any):Observable<any>{
    return this.http.delete(`${this.API_PERSONAL}/${id}`)
  }
}
