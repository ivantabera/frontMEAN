import { Component, OnInit } from '@angular/core';

//clase que se importa para navegar entre paginas
import { ActivatedRoute } from '@angular/router';

//Importamos el servicio que contiene la BD
import { ArticulosService } from '../../services/articulos.service';

//Clase que se necesita para trabajar con formularios
import { NgForm } from '@angular/forms';

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
  public login:boolean = false;

  constructor(activateRoute: ActivatedRoute, private articulosService : ArticulosService) {
    
    /*==========Recibiendo datos dinamicos============*/
    this.articulosService.getArticulos().subscribe( respuesta => {

      this.articuloJson = respuesta;
      
      this.renderArticulo = this.articuloJson.find(result => {

        return result.url == activateRoute.snapshot.params["id"]
      
      })

      this.contenidoArticulo = this.renderArticulo.contenido;

    }); 

  }

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){
    console.log('f:', f)

  }

}
