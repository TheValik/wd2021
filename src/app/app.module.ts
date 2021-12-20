import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { TytulkaComponent } from './tytulka/tytulka.component';
import { NewsComponent } from './news/news.component';
import { FormaVzaemidiiComponent } from './forma-vzaemidii/forma-vzaemidii.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { VstavkaComponentaComponent } from './vstavka-componenta/vstavka-componenta.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    TytulkaComponent,
    NewsComponent,
    FormaVzaemidiiComponent,
    VstavkaComponentaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
