import { Injectable } from '@angular/core';

//Este import HttpClient es para conectarnos a cualquier api con peticiones http, HttpHeaders para enviar cabeceras como token
import { HttpClient, HttpHeaders } from '@angular/common/http';

//Importamos la ruta global de la API
import { Ruta } from '../config';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  public url : string;

  constructor(private http: HttpClient) {

    this.url = Ruta.url;

  }

  /* Hacer peticion POST en angular  */
  guardarUsuario(listUsuario){

    const headers = new HttpHeaders();

    return this.http.post(`${this.url}/crear-usuario`, listUsuario, {headers});
  }

}
