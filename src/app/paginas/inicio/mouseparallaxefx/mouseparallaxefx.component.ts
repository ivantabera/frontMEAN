import { Component, OnInit } from '@angular/core';

//Declarar variables para usar jQuery dentro de TS
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-mouseparallaxefx',
  templateUrl: './mouseparallaxefx.component.html',
  styleUrls: ['./mouseparallaxefx.component.css']
})
export class MouseparallaxefxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    /*=============================================
    MOUSE PARALLAX EFFECT - JQUERY
    =============================================*/

    var mouseParallax = $(".mouseParallax");

    $(".mouseParallax").mousemove(function(e){
 
      var posX = e.offsetX;
      var posY = e.offsetY;

      for (var i = 0; i < mouseParallax.length; i++) {
        
        $(mouseParallax[i]).css({

          "width":"110%",
          "left":-posX / (i *250) + "%",
          "top":posY / (i *250) + "%"


        })
      }

      $(mouseParallax[0]).css({"width":"100%"})


    })

  }

}
