import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-mioform',
  templateUrl: './mioform.component.html',
  styleUrls: ['./mioform.component.css']
})
export class MioformComponent implements OnInit {
  emailFormControl = new FormControl('',[Validators.required, Validators.email])
  constructor() { }

  ngOnInit(): void {
  }

}
