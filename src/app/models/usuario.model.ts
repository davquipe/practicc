export class Usuario {
    constructor(
        public nombre: string,
        public login: string,
        public clave: string,
        public tipoDocumento: string,
        public numDocumento: string,
        public direccion?: string,
        public telefono?: string,
        public email?: string,
        public img?: string,
        public role?: string,
        public condicion?: boolean,
        public _id?: string
    ) {}
}