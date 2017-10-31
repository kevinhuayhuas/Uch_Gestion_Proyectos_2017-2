import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { FileUploadModule } from 'ng2-file-upload/ng2-file-upload';
import { TreeModule } from 'angular-tree-component';
import { CustomFormsModule } from 'ng2-validation';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

import { BlogRoutes } from './blog.routing';

import { PostDetalle } from './post-detalle/postdetalle.component';
import { PostComponent } from './post/post.component';
import { PostNuevo } from './post-nuevo/postnuevo.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(BlogRoutes),
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    NgbProgressbarModule,
    CustomFormsModule,
    TreeModule,
    TextMaskModule,
    FileUploadModule
  ],
  declarations: [PostComponent, PostDetalle,PostNuevo]
})

export class BlogModule { }