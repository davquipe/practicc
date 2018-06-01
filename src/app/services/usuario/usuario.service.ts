import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { Usuario } from '../../models/usuario.model';
import { map } from 'rxjs/operators';



@Injectable()
export class UsuarioService {

  totalUsuarios: Number = 0;

  constructor(
    public http: HttpClient,
  ) { }

  login( usuario: Usuario, recordar: Boolean = false ){
    let url = URL_SERVICIOS + '/login';
    return this.http.post( url, usuario );
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

borrarUsuario( id: string ){
  let url = URL_SERVICIOS + '/usuario' + id;
}

}
