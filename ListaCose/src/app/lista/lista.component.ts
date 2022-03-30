import { Component, OnInit,} from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {
  listaImpegni:string[]=[];
  constructor() { }
  aggiungiImpegno(nome:string): void {
    this.listaImpegni.push(nome);
  }
  ngOnInit():void{
  }
  catturaEvento(ind:number){
    console.log("Ho catturato l'evento " + ind);
    this.listaImpegni.splice(ind,1);
  }
}
