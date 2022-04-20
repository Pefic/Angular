import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gioco',
  templateUrl: './gioco.component.html',
  styleUrls: ['./gioco.component.css']
})
export class GiocoComponent implements OnInit {
  turno:number=1;
  caselle:number[]=new Array(9);

  constructor() {
    for(var i = 0 ; i<9; i++){
      this.caselle[i]=0;
      console.log(this.caselle[i]);
    }
    //this.caselle[0]=2;
    console.log(this.caselle[0]);
   }

  ngOnInit(): void {
  }
  selezioneCasella(ind:number){

    if(this.caselle[ind]>0){
      return;
    }
    this.caselle[ind]=this.turno;
    this.turno++;
    if(this.turno==3){
      this.turno=1;
    }
  }
}
