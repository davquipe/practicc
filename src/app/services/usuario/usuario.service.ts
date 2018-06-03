import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { Usuario } from '../../models/usuario.model';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';



@Injectable()
export class UsuarioService {

  totalUsuarios: Number = 0;
  usuario: Usuario;
  token: string;

  constructor(
    public http: HttpClient,
    public router: Router
  ) { 
    this.cargarStorage();
  }

  estaLogueado() {
    return ( this.token.length > 5 ) ? true : false;
  }

  cargarStorage() {

    if ( localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse( localStorage.getItem('usuario') );
    } else {
      this.token = '';
      this.usuario = null;
    }

  }

  logout() {
    this.usuario = null;
    this.token = '';

    localStorage.removeItem('token');
    localStorage.removeItem('usuario');

    this.router.navigate(['/login']);
  }

  login( usuario: Usuario, recordar: boolean = false ){
    if(recordar){
      localStorage.setItem('login', usuario.login );
    } else{
      localStorage.removeItem('login');
    }

    let url = URL_SERVICIOS + '/login';
    return this.http.post( url, usuario )
                .map( (resp: any) => {
                  localStorage.setItem('id', resp.id );
                  localStorage.setItem('token', resp.token );
                  localStorage.setItem('usuario', JSON.stringify(resp.usuario ));

                return true;
                });
  }

  cargarUsuarios(){
    let url = URL_SERVICIOS + '/usuario';

    return this.http.get( url )
            .map((resp:any) => {
              this.totalUsuarios = resp.total;
              return resp.usuarios;
            });

  }
 
  buscarUsuarios( termino: string ){
    let url = URL_SERVICIOS + '/busqueda/coleccion/usuarios/' + termino;
    return this.http.get(url)
                .map((resp: any) => resp.usuarios);
  }

  crearUsuario( usuario: Usuario){
    let url = URL_SERVICIOS + '/usuario';
    return this.http.post(url, usuario);
  }

borrarUsuario( id: string ){
  let url = URL_SERVICIOS + '/usuario' + id;
}

}
