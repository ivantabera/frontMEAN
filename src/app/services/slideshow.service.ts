//importamos el decorador injectable para inyectar clases de dependencias en los componentes
import { Injectable } from '@angular/core';

//Este import es para conectarnos a cualquier api con peticiones http
import { HttpClient } from '@angular/common/http';

//definimos el decorador inyectable
@Injectable({
  providedIn: 'root'
})
export class SlideshowService {

  public url : string;

  constructor(private http : HttpClient) {
    this.url = "assets/json/slide.json";
  }

  getSlideShow(){
    return this.http.get(this.url);
  }
}
