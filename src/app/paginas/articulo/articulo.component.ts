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
  public usuario:string;
  public password:string;
  public usuarioJson:any;
  public renderUsuario:any;
  public validarLogin:boolean = true;
  public url = Ruta.url;

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

    }); 

  }

  ngOnInit(): void {
  }

  /* ===========formulario login=============== */

  onSubmit(f: NgForm){

    this.usuariosService.getUsuarios().subscribe(respuesta => {
    
      this.usuarioJson = respuesta;
      
      this.renderUsuario = this.usuarioJson.find(result => {

        if(result.usuario == this.usuario && result.password == this.password){
          return true
        } else {
          return false
        }
      
      })

      if(this.renderUsuario){
        this.login = true;
      } else {
        this.validarLogin = false;
      }

    })

  }

}
