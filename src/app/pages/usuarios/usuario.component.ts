import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';


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
      nombre: new FormControl( null, Validators.required),
      login: new FormControl( null, Validators.required ),
      clave: new FormControl( null, Validators.required),
      clave1: new FormControl( null, Validators.required),
      tipoDocumento: new FormControl( null, Validators.required),
      numDocumento: new FormControl( null, Validators.required),
      direccion: new FormControl( null, Validators.nullValidator  ),
      telefono: new FormControl(null, Validators.nullValidator),
      email: new FormControl(null, [Validators.nullValidator, Validators.email]),
      condiciones: new FormControl( false)
    });
  }

}
