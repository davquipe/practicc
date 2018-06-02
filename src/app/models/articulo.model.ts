export class Articulo {
    constructor(
        public codigo: number,
        public nombre: string,
        public stock: string,
        public descripcion: string,
        public img?: string,
        public condicion?: boolean,
        public categoria?: string,
        public _id?: string
    ) { }
}