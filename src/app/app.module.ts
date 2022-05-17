import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PedidoComponent } from './component/pedido/pedido.component';
import { ProductoComponent } from './component/producto/producto.component';
import { ClienteComponent } from './component/cliente/cliente.component';
import { DetallepedidoComponent } from './component/detallepedido/detallepedido.component';
import { CategoriaComponent } from './component/categoria/categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    PedidoComponent,
<<<<<<< HEAD
    DetallepedidoComponent,
    CategoriaComponent
=======
    ProductoComponent,
    ClienteComponent,
    DetallepedidoComponent

>>>>>>> 75f619845a7ae96c2db584d3c9802d348f070b7d
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
