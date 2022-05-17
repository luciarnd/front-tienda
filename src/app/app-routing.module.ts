import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './component/categoria/categoria.component';
import { DetallepedidoComponent } from './component/detallepedido/detallepedido.component';
import { PedidoComponent } from './component/pedido/pedido.component';

const routes: Routes = [
  {path: 'pedido/all', component: PedidoComponent},
  {path: 'detallepedido/all', component: DetallepedidoComponent},
  {path: 'categoria/all', component: CategoriaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
