import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './paginas/inicio/inicio.component';
import { ArticuloComponent } from './paginas/articulo/articulo.component';


const routes: Routes = [

  { path: '', component: InicioComponent},
  //para poder recibir parametros en la url se pone "/:param"
  { path: 'articulo/:id', component: ArticuloComponent},
  { path: '**', pathMatch: 'full', redirectTo: ''}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
