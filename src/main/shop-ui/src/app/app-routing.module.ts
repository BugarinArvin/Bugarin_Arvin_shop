import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { StoreComponent } from './components/store/store.component';
import { CustomerComponent } from './components/customer/customer.component';
import { CustomerGuard } from './customer.guard';
import { ConfirmationComponent } from './components/confirmation/confirmation.component';
import { OrderPipelineComponent } from './components/order-pipeline/order-pipeline.component';

const routes: Routes = [
  {
    component: CustomerComponent,
    path: ""
  },
  {
    component: CustomerComponent,
    path: "login"
  },
  {
    component: StoreComponent,
    path: "store",
    canActivate: [CustomerGuard]
  },
  {
    component: OrderPipelineComponent,
    path: "pipeline",
    canActivate: [CustomerGuard]
  },
  {
    component: ConfirmationComponent,
    path: "checkout",
    canActivate: [CustomerGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
