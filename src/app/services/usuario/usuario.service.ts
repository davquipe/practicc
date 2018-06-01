import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { Usuario } from '../../models/usuario.model';
import { map } from 'rxjs/operators';



@Injectable()
export class UsuarioService {

  totalUsuarios: number = 0;

  constructor(
    public http: HttpClient,
  ) { }

  cargarUsuarios(){
    let url = URL_SERVICIOS + '/usuario';

    return this.http.get( url )
            .map((resp:any) => {
              this.totalUsuarios = resp.total;
              return resp.usuarios;
            })

  }

}
