//Busca modulos de Angular
import { BrowserModule } from '@angular/platform-browser';
//Modulo raiz
import { NgModule } from '@angular/core';

//Modulo de ruta
import { AppRoutingModule } from './app-routing.module';
//Componente principal
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { SlideshowComponent } from './slideshow/slideshow.component';
import { GaleriaComponent } from './galeria/galeria.component';
import { MouseparallaxefxComponent } from './mouseparallaxefx/mouseparallaxefx.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { FormularioComponent } from './formulario/formulario.component';

@NgModule({
  
  //Clases de vista que pertenecen a este modulo 
  declarations: [
    AppComponent,
    HeaderComponent,
    SlideshowComponent,
    GaleriaComponent,
    MouseparallaxefxComponent,
    ArticulosComponent,
    FormularioComponent
  ],

  //importamos otros modulos cuyas clases exportadas sean necesarias para las plantillas de los componentes declarados en este modulo
  imports: [
    BrowserModule,
    AppRoutingModule
  ],

  //Recoleccion global de servicios, se vuelven accesibles en todas partes de la aplicacion. Esto lo habilitamos cuando invocamos servicios desde una base de datos
  providers: [],

  bootstrap: [AppComponent]
})

//Exportamos la clase del modulo raiz para ser invocada en otros archivos 
export class AppModule { }
