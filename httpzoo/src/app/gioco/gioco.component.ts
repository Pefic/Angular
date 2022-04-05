import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animale } from '../model/animale.model';

@Component({
  selector: 'app-gioco',
  templateUrl: './gioco.component.html',
  styleUrls: ['./gioco.component.css']
})
export class GiocoComponent implements OnInit {
  animali: Animale[]= new Array();
  constructor(private http:HttpClient) {
    this.caricando();
   }

  ngOnInit(): void {
  }
  premi(ind:number):void{
    console.log(this.animali[ind].name);
    this.caricando();
  }
  caricando():void{
    this.http.get<Animale[]>('https://zoo-animal-api.herokuapp.com/animals/rand/2')
    .subscribe((arg)=>{
      this.animali=arg;
      console.log(this.animali);
    });
  }
}
