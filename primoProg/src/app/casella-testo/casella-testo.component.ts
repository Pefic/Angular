import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-casella-testo',
  templateUrl: './casella-testo.component.html',
  styleUrls: ['./casella-testo.component.css']
})
export class CasellaTestoComponent implements OnInit {
  testo:string='ciao';
  qualita:string='';
  risultato:number;
  constructor() {
    this.testo+='Mamma';
  }

  ngOnInit(): void {
  }

  aggiungiElemento(): void{
    this.qualita='guarda come mi diverto';
    this.risultato=this.somma(1,2);
  }
  somma(a:number,b:number): number{
    return a+b;
  }
}
