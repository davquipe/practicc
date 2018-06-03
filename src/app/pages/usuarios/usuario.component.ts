import { Component, OnInit, group } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import * as swal from 'sweetalert';
import { Usuario } from '../../models/usuario.model';


import { 
  UsuarioService 
} from '../../services/service.index';



@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styles: []
})
export class UsuarioComponent implements OnInit {

  forma: FormGroup;

  constructor(
    public _usuarioService: UsuarioService,
    public router: Router
  ) { }

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
      swal('Importante', 'Debe de aceptar las condiciones', 'warning');
      return;
    }
    let usuario = new Usuario(
      this.forma.value.nombre,
      this.forma.value.login,
      this.forma.value.clave,
      this.forma.value.tipoDocumento,
      this.forma.value.numDocumento
    );

    this._usuarioService.crearUsuario( usuario )
              .subscribe(resp => this.router.navigate(['/usuarios']));

  }

}
