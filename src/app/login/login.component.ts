import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  login: string;
  recuerdame: boolean = false;

  constructor(
    public router: Router,
    public _usuarioService: UsuarioService
  ) { }

  ngOnInit() {

    this.login = localStorage.getItem('login') || '';
    if ( this.login.length > 1 ) {
      this.recuerdame = true;
    }
  }

  ingresar( forma: NgForm){

    if( forma.invalid ){
      return;
    }

    let usuario = new Usuario (null, forma.value.login, forma.value.clave, null, null);

    this._usuarioService.login( usuario, forma.value.recuerdame  )
                 .subscribe( correcto => this.router.navigate(['/dashboard'])  );
  }

}
