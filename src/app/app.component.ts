//Importamos la clase Compontent para recopilar metadatos de configuracion de componentes
//Importamos la clase OnInit para usar jQuery
import { Component, OnInit } from '@angular/core';

//Declarar variables para usar jQuery dentro de TS
declare var jQuery:any;
declare var $:any;

//Decorador de la clase Componente
@Component({

  //selector: etiqueta que nos permite crear Angular en HTML y donde se va visualizar el componente
  selector: 'app-root',
  //templateUrl: ruta de la vista HTML que va a imprimir este componente 
  templateUrl: './app.component.html',
  //styleUrls: ruta del estilo exclusiva del componente
  styleUrls: ['./app.component.css']
})

//Exportamos la clase con el nombre que declaramos en APP MODULE  
export class AppComponent implements OnInit {

  ngOnInit(){

    /*=============================================
    NAVEGACIÓN SCROLL
    =============================================*/

    $(".nav-link").click(function(e){

      e.preventDefault();

      var target = $(this).attr("href");
      
      $("html, body").animate({

        scrollTop: $(target).offset().top

      },1000, "easeOutBack")

    })

    /*=============================================
    SCROLL UP
    =============================================*/

    $.scrollUp({
      scrollText: "",
      scrollSpeed:2000,
      easingType: "easeOutQuint"
    })

    $("#scrollUp").css({
      "bottom": "20px",
      "right": "20px",
      "whidth": "50px",
      "height": "50px",
      "background": "url(../assets/img/flecha.jpg)"
    })

  }
}
