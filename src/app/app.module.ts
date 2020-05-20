//Busca modulos de Angular
import { BrowserModule } from '@angular/platform-browser';
//Modulo raiz
import { NgModule } from '@angular/core';

//Modulo de ruta
import { AppRoutingModule } from './app-routing.module';

//Modulo para hacer peticiones http a las api con las que nos conectemos
import { HttpClientModule } from '@angular/common/http';

//Componente principal
import { AppComponent } from './app.component';
import { HeaderComponent } from './paginas/inicio/header/header.component';
import { SlideshowComponent } from './paginas/inicio/slideshow/slideshow.component';
import { GaleriaComponent } from './paginas/inicio/galeria/galeria.component';
import { MouseparallaxefxComponent } from './paginas/inicio/mouseparallaxefx/mouseparallaxefx.component';
import { ArticulosComponent } from './paginas/inicio/articulos/articulos.component';
import { FormularioComponent } from './paginas/inicio/formulario/formulario.component';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ArticuloComponent } from './paginas/articulo/articulo.component';

@NgModule({
  
  //Clases de vista que pertenecen a este modulo 
  declarations: [
    AppComponent,
    HeaderComponent,
    SlideshowComponent,
    GaleriaComponent,
    MouseparallaxefxComponent,
    ArticulosComponent,
    FormularioComponent,
    InicioComponent,
    ArticuloComponent
  ],

  //importamos otros modulos cuyas clases exportadas sean necesarias para las plantillas de los componentes declarados en este modulo
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],

  //Recoleccion global de servicios, se vuelven accesibles en todas partes de la aplicacion. Esto lo habilitamos cuando invocamos servicios desde una base de datos
  providers: [],

  bootstrap: [AppComponent]
})

//Exportamos la clase del modulo raiz para ser invocada en otros archivos 
export class AppModule { }
