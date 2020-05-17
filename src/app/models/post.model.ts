

export class Post {
    titulo: string;
    texto: string;
    autor: string;
    imagen: string;
    fecha: string;
    categoria: string;

    constructor(pTitulo: string, pTexto: string, pAutor: string, pImagen: string, pFecha: string, pCategoria: string) {
        this.texto = pTexto;
        this.titulo = pTitulo;
        this.autor = pAutor;
        this.imagen = pImagen;
        this.fecha = pFecha;
        this.categoria = pCategoria;

    }
    
}