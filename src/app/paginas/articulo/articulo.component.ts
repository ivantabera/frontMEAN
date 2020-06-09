import { Component, OnInit } from '@angular/core';

//clase que se importa para navegar entre paginas
import { ActivatedRoute } from '@angular/router';

//Importamos el servicio que contiene la BD
import { ArticulosService } from '../../services/articulos.service';
import { UsuariosService } from '../../services/usuarios.service';

//importamos la ruta global de config
import { Ruta } from '../../config';

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
  public usuarioJson:any;
  public renderUsuario:any;
  public validarLogin:boolean = true;
  public url = Ruta.url;
  public listUsuario:any;
  public mensajeLogin:string;

  constructor(activateRoute: ActivatedRoute, 
              private articulosService : ArticulosService, 
              private usuariosService : UsuariosService) {
    
    /*==========Recibiendo datos dinamicos============*/
    this.articulosService.getArticulos().subscribe( respuesta => {

      this.articuloJson = respuesta;
      
      this.renderArticulo = this.articuloJson['data'].find(result => {

        return result.url == activateRoute.snapshot.params["id"]
      
      })

      this.contenidoArticulo = this.renderArticulo.contenido;

    })

    /* ====================Objeto lista usuario====================== */
    this.listUsuario = {
      usuario:null,
      password:null
    }

  }

  ngOnInit(): void {
  }

  /* ===========formulario login=============== */

  onSubmit(f: NgForm){

    this.usuariosService.loginUsuario(this.listUsuario).subscribe(respuesta => {
    
      this.usuarioJson = respuesta;

      if(this.usuarioJson["mensaje"] == "ok"){
        this.login = true;
      } else {
        this.mensajeLogin = this.usuarioJson["mensaje"];
        this.validarLogin = false; 
      }

    })

  }

}
