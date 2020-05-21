import { Component, OnInit } from '@angular/core';

//clase que se importa para navegar entre paginas
import { ActivatedRoute } from '@angular/router';

//Importamos el servicio que contiene la BD
import { ArticulosService } from '../../services/articulos.service';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  // Variables publicas o globales
  public articuloJson:any;
  public renderArticulo:any;
  public contenidoArticulo:any;

  constructor(activateRoute: ActivatedRoute, 
              private articulosService : ArticulosService) {
    
    /*==========Recibiendo datos dinamicos============*/
    this.articulosService.getArticulos().subscribe( respuesta => {

      this.articuloJson = respuesta;
      
      this.renderArticulo = this.articuloJson.find(result => {

        return result.id == activateRoute.snapshot.params["id"]
      
      })

      this.contenidoArticulo = this.renderArticulo.contenido;

    }); 

  }

  ngOnInit(): void {
  }

}
