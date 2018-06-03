import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  forma: FormGroup;

  constructor() { }

  ngOnInit() {

    this.forma = new FormGroup({
      nombre: new FormControl()
    });
  }

}
