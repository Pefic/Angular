import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { pathToFileURL } from 'url';
import { ListaComponent } from './lista/lista.component';
import { CommentoComponent } from './commento/commento.component';
import { NotfoundComponent } from './notfound/notfound.component';

//definiamo i rooting interni per poter effettuare una navigazione all'interno della pagina
const routes: Routes = [
  {path: '', component: ListaComponent},
  {path:'commento', component: CommentoComponent },
  {path:'notfound', component: NotfoundComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
