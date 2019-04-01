import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreComponent } from './components/store/store.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ShoppingBasketComponent } from './components/shopping-basket/shopping-basket.component';
import { CustomerComponent } from './components/customer/customer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { OrderPipelineComponent } from './components/order-pipeline/order-pipeline.component';

@NgModule({
  declarations: [
    AppComponent,
    StoreComponent,
    ShoppingBasketComponent,
    CustomerComponent,
    ConfirmationComponent,
    OrderPipelineComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
