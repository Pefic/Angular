import { Component } from '@angular/core';
import { TestObject } from 'protractor/built/driverProviders';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'contatore';
  nuovotitolo:string="Bicicletta";
  colore:string="red";

  contatori:string[]=[];

  aggiungiContatore(nome:string):void{
    this.contatori.push(nome);
    console.log(this.contatori);
  }
  rimuoviContatore(mess:string):void{
    console.log(mess);
    let ind=this.contatori.indexOf(mess);
    this.contatori.splice(ind,1);
  }
}
