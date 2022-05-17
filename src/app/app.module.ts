import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PedidoComponent } from './component/pedido/pedido.component';
import { DetallepedidoComponent } from './component/detallepedido/detallepedido.component';
import { CategoriaComponent } from './component/categoria/categoria.component';

@NgModule({
  declarations: [
    AppComponent,
    PedidoComponent,
    DetallepedidoComponent,
    CategoriaComponent
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
