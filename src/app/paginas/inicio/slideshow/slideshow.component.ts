import { Component, OnInit } from '@angular/core';

//importamos el servicio
import { SlideshowService } from '../../../services/slideshow.service';

//Declarar variables para usar jQuery dentro de TS
declare var jQuery:any;
declare var $:any;

@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.css']
})
export class SlideshowComponent implements OnInit {

  constructor( private slideShowService: SlideshowService ) {

    /*=============================================
    Recibiendo datos dinamicos
    =============================================*/
    this.slideShowService.getSlideShow().subscribe( respuesta => {
      console.log('respuesta:', respuesta)

    })
  }

  ngOnInit(): void {
    
    /*=============================================
    JD SLIDER
    =============================================*/

    $('.slideshow').jdSlider({

      wrap:'.slide-inner', //Especificar el slide que vamos a usar
      isAuto: true, //Inicia la animación automáticamente
      isLoop: true, //Al finalizar vuelve a comenzar
      interval: 7000, //Tiempo por cada slide
      isCursor:true //Pausar animación con el mouse

    });
  }

}
