import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-lista-item',
  templateUrl: './lista-item.component.html',
  styleUrls: ['./lista-item.component.css']
})
export class ListaItemComponent implements OnInit {
  //aggiungiamo una caratteristiche della variabile
  @Input() testo:string="";
  @Input() indice:number=-1;
  //Decoratore di output
  @Output() cancellaImpengo = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  //funzione per il tasto cancella
  scaturisciEvento(): void{
    console.log('emetti vento');
    this.cancellaImpengo.emit(this.indice);
  }

}
