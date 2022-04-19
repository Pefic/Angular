import { Component, OnInit } from '@angular/core';
import { MiosService } from '../mios.service';
@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css']
})
export class Comp2Component implements OnInit {
  nomeComp2:string='Comp 2';
  constructor(private ms:MiosService) {
    ms.comuneChanged$.subscribe(
      (s)=>{
        this.nomeComp2=s;
      }
    );
    this.ms.cambiaStringa('Valore di partenza uguale');
   }

  ngOnInit(): void {
  }

  cambiaNome2():void{
    //this.nomeComp2='Ho cambiato il nome della Comp 2';
    this.ms.cambiaStringa('Ho cambiato Comp 2');
  }
}
