import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { Proyecto } from '../models/proyecto';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  selectedProyecto: Proyecto;
  darinformacion: Proyecto[];
  readonly URL_API = 'http://localhost:3000/api/proyecto';

  constructor(private http: HttpClient) { 
    this.selectedProyecto = new Proyecto();
  }

  // suministra informacion
  getProyecto(){
    return this.http.get(this.URL_API);
  }

  // ingresa informacion
  postProyecto(darProyecto: Proyecto) {
    return this.http.post(this.URL_API, darProyecto);
  }

  // actualiza informacion
  putProyecto(darProyecto: Proyecto){
    return this.http.put(this.URL_API + `/${darProyecto._id}`, darProyecto);
  }

  //borra informacion
  deleteProyecto(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }
}
