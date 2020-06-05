import { Component, OnInit } from '@angular/core';

//Importamos el servicio
import { ArticulosService } from '../../../services/articulos.service';

//importamos la ruta global de config
import { Ruta } from '../../../config';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css']
})
export class ArticulosComponent implements OnInit {

  //Variables publicas o privadas
  public articulosJson:any;
  public url = Ruta.url;

  constructor(private articulosService : ArticulosService) {

    /*==========Recibiendo datos dinamicos============*/
    this.articulosService.getArticulos().subscribe( respuesta => {
      
      this.articulosJson = respuesta["data"];

    });

  }

  ngOnInit(): void {
  }

}
