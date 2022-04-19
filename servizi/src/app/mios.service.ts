import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { animale } from './model/animale.model';

@Injectable({
  providedIn: 'root'
})
export class MiosService {

  private stringaComune = new Subject<string>();

  comuneChanged$ = this.stringaComune.asObservable();
  constructor(private http:HttpClient) { }

  cambiaStringa(nuovaStringa:string){
    this.stringaComune.next(nuovaStringa);
  }
  //specificare nella funzione il tipo di oggetto che dobbiamo richiamare e non un oggetto generico
  richiediAnimale():Observable<animale>{
    return this.http.get<animale>('https://zoo-animal-api.herokuapp.com/animals/rand');
  }

  richiediMoltiAnimali(n:number):Observable<animale[]>{
    return this.http.get<animale[]>('https://zoo-animal-api.herokuapp.com/animals/rand/' + n);

  }
}
