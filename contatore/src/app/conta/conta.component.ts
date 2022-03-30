import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-conta',
  templateUrl: './conta.component.html',
  styleUrls: ['./conta.component.css']
})
export class ContaComponent implements OnInit {

  @Input() titolo:string='';
  @Output() cancella=new EventEmitter<string>();
  numero:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  somma(): void{
    this.numero += 1;
  }
  inc10(): void{
    this.numero += 10;
  }
  azzera(): void{
    this.numero=0;
  }
  cancellaContatore(): void{
    console.log("vuoi cancellare un dato");
    this.cancella.emit(this.titolo);
  }
}
