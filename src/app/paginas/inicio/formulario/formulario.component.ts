import { Component, OnInit } from '@angular/core';

import { UsuariosService } from '../../../services/usuarios.service';
//Clase que se necesita para trabajar con formularios
import { NgForm } from '@angular/forms';

//Declarar variables para usar jQuery dentro de TS
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  public listUsuario:any;
  public usuarioCreado:any;
  public validCreateUsuario:boolean = true; 
  public mensajeApi:string;

  constructor( private usuariosService: UsuariosService) { 

    this.listUsuario = {
      usuario:null,
      password:null,
      email:null
    }

  }

  ngOnInit(): void {

    /*=============================================
    VALIDAR FORMULARIO
    =============================================*/

    (function() {
      'use strict';
      window.addEventListener('load', function() {
        // Get the forms we want to add validation styles to
        var forms = document.getElementsByClassName('needs-validation');
        // Loop over them and prevent submission
        var validation = Array.prototype.filter.call(forms, function(form) {
          form.addEventListener('submit', function(event) {
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');
          }, false);
        });
      }, false);
    });

    /*=============================================
    ICHECK
    =============================================*/

    $(".icheck").iCheck({

      checkboxClass: "icheckbox_flat-blue",
      radioClass: "iradio_flat-blue"
    })

  }

  /* Recibir del formulario login la funcion guardar usuario */
  guardarUsuario(f: NgForm){
    
    this.usuariosService.guardarUsuario(this.listUsuario).subscribe( respuesta => {

      this.usuarioCreado = respuesta;
      
       if (this.usuarioCreado["status"] == 200) {

        this.validCreateUsuario = true;
        $(".validCreateUsuario").removeClass("d-none");
        $(".validCreateUsuario").addClass("d-block");
        $(".validCreateUsuario").html(this.usuarioCreado["mensaje"]);

      } else {

        this.validCreateUsuario = false;
        this.mensajeApi = this.usuarioCreado["mensaje"];

      }

    })


  }

}
