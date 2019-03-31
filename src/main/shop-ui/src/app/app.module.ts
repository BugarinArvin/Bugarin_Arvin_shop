import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './components/store/store.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ShoppingBasketComponent } from './components/shopping-basket/shopping-basket.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    ShoppingBasketComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
