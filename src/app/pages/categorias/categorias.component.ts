import { Component, OnInit } from '@angular/core';
import { CategoriaService } from '../../services/categoria/categoria.service';
import { Categoria } from '../../models/categoria.model';

@Component({
    selector: 'app-categorias',
    templateUrl: './categorias.component.html',
    styles: []
})
export class CategoriasComponent implements OnInit {

    categorias: Categoria[] = [];

    constructor(
        public _categoriaService: CategoriaService
    ) { }

    ngOnInit() {
        this.cargarCategorias();
    }

    cargarCategorias() {
        this._categoriaService.cargarCategorias()
            .subscribe(categorias => this.categorias = categorias)
    }

    buscarCategoria(termino: string) {
        if (termino.length <= 0) {
            this.cargarCategorias();
            return;
        }
        this._categoriaService.buscarCategorias(termino)
            .subscribe(categorias => this.categorias = categorias);
    }

    borrarCategoria(categoria: Categoria) {

    }
}


