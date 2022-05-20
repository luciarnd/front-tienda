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
<<<<<<< HEAD
import { EmailComponent } from './component/email/email.component';
=======
>>>>>>> a748f76287afe4cc50730f36cd6c4e1f7f1ee1f9
import { FormsModule } from '@angular/forms';

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
    EmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
