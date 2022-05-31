import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './component/categoria/categoria.component';
import { ClienteComponent } from './component/cliente/cliente.component';
import { EmailComponent } from './component/email/email.component';
import { PedidoComponent } from './component/pedido/pedido.component';
import { ProductoComponent } from './component/producto/producto.component';
import { SobreNosotrosComponent } from './component/sobre-nosotros/sobre-nosotros.component';

const routes: Routes = [
  {path: 'pedido/all', component: PedidoComponent},
  {path: 'producto/all', component:ProductoComponent},
  {path: 'cliente/all', component:ClienteComponent},
  {path: 'categoria/all', component: CategoriaComponent},
  {path: 'nosotros', component: SobreNosotrosComponent},
  {path: 'email/enviar', component: EmailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
