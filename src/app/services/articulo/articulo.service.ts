import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { Articulo } from '../../models/articulo.model';
import { map } from 'rxjs/operators';



@Injectable()
export class ArticuloService {

    totalArticulos: Number = 0;

    constructor(
        public http: HttpClient,
    ) { }

    login(articulo: Articulo, recordar: Boolean = false) {
        let url = URL_SERVICIOS + '/login';
        return this.http.post(url, articulo);
    }

    cargarArticulos() {
        let url = URL_SERVICIOS + '/articulo';

        return this.http.get(url)
            .map((resp: any) => {
                this.totalArticulos = resp.total;
                return resp.articulos;
            });

    }

    buscarArticulos(termino: string) {
        let url = URL_SERVICIOS + '/busqueda/coleccion/articulos/' + termino;
        return this.http.get(url)
            .map((resp: any) => resp.articulos);
    }

    borrarArticulo(id: string) {
        let url = URL_SERVICIOS + '/articulo' + id;
    }

}
