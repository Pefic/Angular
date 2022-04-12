import { Component } from '@angular/core';
import { FormControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'postdati';
  MioFormGroup:FormGroup;
  constructor(private fb:FormBuilder, private http:HttpClient){
    this.MioFormGroup=fb.group({
      email:["",[Validators.required,Validators.email]],
   /*   nome:["Pino",[Validators.required,Validators.pattern('[a-zA-Z ]*')]],
      eta:[18,[Validators.required, Validators.min(18), Validators.max(101)]],*/
      accetto:[false,[Validators.requiredTrue]]
    });
  }
    inviadati(): void{
      console.log('vuoi inviare i dati?');
      var fd = new FormData();
      fd.append("email", this.MioFormGroup.get('email')?.value);
      fd.append("nome", this.MioFormGroup.get('nome')?.value);
      fd.append("eta", this.MioFormGroup.get('eta')?.value);

      this.http.post('http://gamesforteachings.altervista.org/IFTS/MandaForm.php', fd).subscribe((dato=>console.log(dato)));
    }
}
