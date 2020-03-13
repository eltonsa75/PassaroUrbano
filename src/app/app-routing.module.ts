import { OndeFicaComponent } from './oferta/onde-fica/onde-fica.component';
import { ComoUsarComponent } from './oferta/como-usar/como-usar.component';
import { DiversaoComponent } from './diversao/diversao.component';
import { RestaurantesComponent } from './restaurantes/restaurantes.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfertaComponent } from './oferta/oferta.component';
import { OrdemCompraComponent } from './ordem-compra/ordem-compra.component';


const routes: Routes = [
{ path: '', component: HomeComponent},
{ path: 'restaurante', component: RestaurantesComponent},
{ path: 'diversao', component: DiversaoComponent},
{ path: 'oferta', component: OfertaComponent},

// Rotas Filhas
{ path: 'oferta/:id', component: OfertaComponent,
  children: [
    { path: '', component: ComoUsarComponent},
    { path: 'como-usar', component: ComoUsarComponent},
    { path: 'onde-fica', component: OndeFicaComponent}
  ]
},
{ path: 'ordem-compra', component: OrdemCompraComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
