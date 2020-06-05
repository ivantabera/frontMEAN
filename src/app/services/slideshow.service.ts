//importamos el decorador injectable para inyectar clases de dependencias en los componentes
import { Injectable } from '@angular/core';

//Este import es para conectarnos a cualquier api con peticiones http
import { HttpClient } from '@angular/common/http';

//Importamos la ruta global de la API
import { Ruta } from '../config';

//definimos el decorador inyectable
@Injectable({
  providedIn: 'root'
})
export class SlideshowService {

  public url : string;

  constructor(private http : HttpClient) {
    this.url = Ruta.url;
  }

  getSlideShow(){
    return this.http.get(`${this.url}/mostrar-slide`);
  }
}
