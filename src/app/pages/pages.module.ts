import { PAGE_ROUTES } from './pages.routes';
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';

import { UsuarioComponent } from './usuarios/usuario.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { ArticuloComponent } from './articulos/articulo.component';
import { ArticulosComponent } from './articulos/articulos.component';
import { PipesModule } from '../pipes/pipes.module';
import { RxjsComponent } from './rxjs/rxjs.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        UsuarioComponent,
        UsuariosComponent,
        ArticuloComponent,
        ArticulosComponent,
        RxjsComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        SharedModule,
        CommonModule,
        FormsModule,
        PAGE_ROUTES,
        PipesModule
    ]
})
export class PagesModule { }
