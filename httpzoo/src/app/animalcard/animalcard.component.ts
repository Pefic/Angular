import { Component, Input, OnInit,  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Animale } from '../model/animale.model';
@Component({
  selector: 'app-animalcard',
  templateUrl: './animalcard.component.html',
  styleUrls: ['./animalcard.component.css']
})
export class AnimalcardComponent implements OnInit {
  @Input() a:Animale = new Animale();

  constructor(private http: HttpClient) {
    http.get<Animale>('https://zoo-animal-api.herokuapp.com/animals/rand').subscribe(arg => {
      //ng onsole.log(arg);
      this.a=arg;
      console.log(this.a);
    });
  }

  ngOnInit(): void {
  }

}
