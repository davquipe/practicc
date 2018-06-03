import { Component, OnInit, group } from '@angular/core';

import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  forma: FormGroup;

  constructor() { }

  sonIguales( campo1: string , campo2: string  ) {

    return ( group: FormGroup ) => {

      let pass1 = group.controls[campo1].value;
      let pass2 = group.controls[campo2].value;

      if ( pass1 === pass2 ) {
        return null;
      }

      return {
        sonIguales: true
      };

    };

  }

  ngOnInit() {

    this.forma = new FormGroup({
      nombre: new FormControl( null, Validators.required),
      login: new FormControl( null, Validators.required ),
      clave: new FormControl( null, Validators.required),
      clave2: new FormControl( null, Validators.required),
      tipoDocumento: new FormControl( null, Validators.required),
      numDocumento: new FormControl( null, Validators.required),
      direccion: new FormControl( null, Validators.nullValidator  ),
      telefono: new FormControl(null, Validators.nullValidator),
      email: new FormControl(null,  Validators.nullValidator ),
      condiciones: new FormControl( false)
    }, {validators: this.sonIguales('clave', 'clave2') });
  }

  registrarUsuario(){

    if ( this.forma.invalid ) {
      return;
    }

    if ( !this.forma.value.condiciones ) {
     console.log('Debe de aceptar las condiciones');

      return;
    }

    console.log(this.forma.value);
  }

}
