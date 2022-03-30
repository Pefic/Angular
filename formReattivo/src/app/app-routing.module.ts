import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MioformComponent } from './mioform/mioform.component';
import { FormultiploComponent } from './formultiplo/formultiplo.component';

const routes: Routes = [
  {path:"", component: MioformComponent },
  {path:"multiplo", component: FormultiploComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
