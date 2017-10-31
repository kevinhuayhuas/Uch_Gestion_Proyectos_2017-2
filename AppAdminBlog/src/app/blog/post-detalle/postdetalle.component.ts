import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { PostService } from '../service/post.service'; 
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';

const URL = 'https://evening-anchorage-3159.herokuapp.com/api/';

import * as Quill from 'quill';
@Component({
    selector: 'app-postdetalle',
    templateUrl: './postdetalle.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./postdetalle.component.scss'],
    providers: [PostService] //importanto mi servicio
})
export class PostDetalle implements OnInit {

    uploader: FileUploader = new FileUploader({
        url: URL,
        isHTML5: true
    });
    hasBaseDropZoneOver = false;
    hasAnotherDropZoneOver = false;

    post: any;

    constructor(private _PostService: PostService, private route: ActivatedRoute) {}

    ngOnInit() {
        const quill = new Quill('#editor-container', {
            modules: {
                toolbar: {
                    container: '#toolbar-toolbar'
                }
            },
            placeholder: 'Descripcion del post...',
            theme: 'snow'
        });
        this.getPost();
    }

    getPost = () => {
        this.route.paramMap.switchMap((params: ParamMap) => this._PostService.getPost(params.get('id'))).subscribe(
            result => {
                this.post = result;
                console.log(this.post.blgp_titulo);
            },
            error => {
                let mensajeerror = <any>error;
                console.log(mensajeerror);
            }
        );
    }

    fileOverBase(e: any): void {
        this.hasBaseDropZoneOver = e;
    }

    fileOverAnother(e: any): void {
        this.hasAnotherDropZoneOver = e;
    }

}