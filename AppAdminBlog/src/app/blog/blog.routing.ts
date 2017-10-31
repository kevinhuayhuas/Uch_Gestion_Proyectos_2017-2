import { Routes } from '@angular/router';
import { PostComponent } from './post/post.component';
import { PostDetalle } from './post-detalle/postdetalle.component';
import { PostNuevo } from './post-nuevo/postnuevo.component';
export const BlogRoutes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'post',
        component: PostComponent,
        data: {
          heading: 'Post'
        }
      },
      {
        path: 'post/:id',
        component: PostDetalle,
        data: {
          heading: 'Detalle'
        } 
      },
      {
        path: 'nuevo-post',
        component: PostNuevo,
        data: {
          heading: 'Nuevo Post'
        }
      }
    ]
  }
];
