import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PedidoComponent } from './component/pedido/pedido.component';
import { ProductoComponent } from './component/producto/producto.component';
import { ClienteComponent } from './component/cliente/cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    PedidoComponent,
    ProductoComponent,
    ClienteComponent
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
