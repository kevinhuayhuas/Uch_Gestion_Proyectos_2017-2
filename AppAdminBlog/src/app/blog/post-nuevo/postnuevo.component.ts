import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload/ng2-file-upload';
import { NgForm } from '@angular/forms';


import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

import { Subject } from 'rxjs/Subject';
declare var jquery: any;
declare var $: any;
//api http://apimdc.sonovin.com/public/index.php/postimg/registrar
//https://evening-anchorage-3159.herokuapp.com/api/
const URL = 'https://cors-anywhere.herokuapp.com/http://apimdc.sonovin.com/public/index.php/postimg/registrar';
import * as Quill from 'quill';
@Component({
    selector: 'app-postnuevo',
    templateUrl: './postnuevo.component.html',
    styleUrls: ['./postnuevo.component.scss'],
    providers: [PostService] //importanto mi servicio

})
export class PostNuevo implements OnInit {
    usuarios: any;
    blogs: any;

    /*
    url - URL of File Uploader's route
    authToken - Auth token that will be applied as 'Authorization' header during file send.
    disableMultipart - Si es "verdadero", deshabilite el uso de un formulario de varias partes para cargar archivos y en 
    su lugar transmita el archivo. Algunas API (por ejemplo, Amazon S3) pueden esperar que el archivo se transmita en lugar 
    de enviarse a través de un formulario. El valor predeterminado es falso.
    itemAlias - alias del elemento (redefenición del nombre del formulario)
    formatDataFunction - Función para modificar el cuerpo de la solicitud. 'DisableMultipart' debe ser 'verdadero' para que se llame a esta función.
    formatDataFunctionIsAsync - Informa si la función enviada en 'formatDataFunction' es asíncrona. El valor predeterminado es falso.
    parametersBeforeFiles - Indica si se deben agregar parámetros adicionales antes o después del archivo. El valor predeterminado es falso.
    */

    uploader: FileUploader = new FileUploader({
        url: URL,
        isHTML5: true
    });
    hasBaseDropZoneOver = false;
    hasAnotherDropZoneOver = false;
    quill;
    estadoRegistro = false;
    estadoError = false;
    constructor(private _PostService: PostService) {
        this.listarUsuarios();
        this.listarBlog();
    }

    ngOnInit() {
        this.quill = new Quill('#editor-container', {
            modules: {
                toolbar: {
                    container: '#toolbar-toolbar'
                }
            },
            placeholder: 'Descripcion del post...',
            theme: 'snow'
        });

    }

    cerrarAlert() {
        this.estadoRegistro = false;
    }
    cerrarError() {
        this.estadoError = false;
    }

    onSubmit(f: NgForm) {
        if (f.value.titulo.length > 1) {
            let delta = this.quill.container.firstChild.innerHTML; //obtener el html https://quilljs.com/docs/api/
            let post = {
                "titulo": f.value.titulo,
                "descripcion": delta,
                "autor": f.value.autor,
                "blog": f.value.blog,
                "tags": f.value.tags,
                "image": "",
                "estado": f.value.estado
            };
            //console.log(post);
            this.nuevoPost(post);
        } else {
            this.estadoError = true;
        }
    }

    nuevoPost = (post) => {
        this._PostService.newPost(post).subscribe(
            result => {
                this.estadoRegistro = true;
                //console.log(result);
            },
            error => {
                let mensajeerror = <any>error;
                console.log(mensajeerror);
            }
        );
    }

    listarUsuarios = () => {
        this._PostService.listarUsers(0, 0).subscribe(
            result => {
                this.usuarios = result["data"];
            },
            error => {
                let mensajeerror = <any>error;
                console.log(mensajeerror);
            }
        );
    }
    listarBlog = () => {
        this._PostService.listarBlog(0, 0).subscribe(
            result => {
                this.blogs = result["data"];
            },
            error => {
                let mensajeerror = <any>error;
                console.log(mensajeerror);
            }
        );
    }


    fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e;
        console.log("fileOverBase " + e);
    }

    fileOverAnother(e: any): void {
        this.hasAnotherDropZoneOver = e;
        console.log("fileOverAnother " + e);
    }
}