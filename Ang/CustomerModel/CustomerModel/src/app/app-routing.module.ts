import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerListComponent } from './customer-list/customer-list.component';
import { CustomerComponent } from './customer/customer.component';
import { UpdateCustomerComponent } from './update-customer/update-customer.component';

const routes: Routes = [
  
  {path:'customers',component:CustomerListComponent },
  {path:'create-customer',component:CustomerComponent},
  {path:'',redirectTo:'customers',pathMatch:'full'},
  {path:'update-customer/:customerId',component:UpdateCustomerComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
