import { Component, OnInit } from '@angular/core';
import { MiosService } from '../mios.service';
import { animale } from '../model/animale.model';
@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css']
})
export class Comp1Component implements OnInit {

  nome:string='Comp 1';
  //l'istanza del servizio deve essere assegnata nel costruttore
  constructor(private ms:MiosService) {
    ms.comuneChanged$.subscribe(
      (s)=>{
        this.nome=s;
      });
      this.ms.cambiaStringa('Valore di partenza uguale');

      this.ms.richiediAnimale().subscribe(
        (p)=>{
          console.log(p.id);
        }
      );


      this.ms.richiediMoltiAnimali(4).subscribe(
        (an)=>{
          for(let bestia of an){
            console.log(bestia.id);
          }
        }
      )
   }

  ngOnInit(): void {
  }

  cambiaNome():void{
    //this.nome='Ho cambiato Comp 1';
    this.ms.cambiaStringa('Ho cambiato Comp 1');
  }
}
