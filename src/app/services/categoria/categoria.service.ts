import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { Categoria } from '../../models/categoria.model';
import { map } from 'rxjs/operators';



@Injectable()
export class CategoriaService {

    totalCategorias: Number = 0;

    constructor(
        public http: HttpClient,
    ) { }

    login(categoria: Categoria, recordar: Boolean = false) {
        let url = URL_SERVICIOS + '/login';
        return this.http.post(url, categoria);
    }

    cargarCategorias() {
        let url = URL_SERVICIOS + '/categoria';

        return this.http.get(url)
            .map((resp: any) => {
                this.totalCategorias = resp.total;
                return resp.categorias;
            });

    }

    buscarCategorias(termino: string) {
        let url = URL_SERVICIOS + '/busqueda/coleccion/categorias/' + termino;
        return this.http.get(url)
            .map((resp: any) => resp.categorias);
    }

    borrarCategoria(id: string) {
        let url = URL_SERVICIOS + '/categoria' + id;
    }

}
