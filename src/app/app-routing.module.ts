import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InvoicesComponent } from './components/invoices/invoices.component';
import { UsersComponent } from './components/users/users.component';


const routes: Routes = [
  { path:'users', component: UsersComponent},
  { path:'invoices', component: InvoicesComponent},
];

@NgModule({

  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
