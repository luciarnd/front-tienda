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
import { SobreNosotrosComponent } from './component/sobre-nosotros/sobre-nosotros.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { EmailComponent } from './component/email/email.component';
import { FormsModule } from '@angular/forms';
import { OrderByPipe } from './pipe/order-by.pipe';
import { NgxSpinnerModule } from "ngx-spinner";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";


@NgModule({
  declarations: [
    AppComponent,
    PedidoComponent,
    DetallepedidoComponent,
    CategoriaComponent,
    ProductoComponent,
    ClienteComponent,
    DetallepedidoComponent,
    SobreNosotrosComponent,
    EmailComponent,
    OrderByPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
