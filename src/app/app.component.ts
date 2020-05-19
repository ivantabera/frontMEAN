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

  ngOnInit(){}
  
}
