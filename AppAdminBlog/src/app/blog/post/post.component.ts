import { Component } from '@angular/core';
import { PostService } from '../service/post.service';

import { Router} from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [PostService] //importanto mi servicio
})
export class PostComponent {
  rows = [];
  selected: any[] = [];
  temp = [];

  columns = [
    { prop: 'blgp_titulo', name: 'Titulo' },
    { prop: 'blgp_tag', name: 'Tag' },
    { prop: 'blgp_fechaactualizacion', name: 'Fecha de Actualizacion' }
  ];

  inicio = 0;
  limite = 0;
  constructor(private _PostService: PostService,private _Router:Router) {
    this.listarPost(this.limite, this.inicio);
  }


  listarBlog = (limite, iniciar) => {
    this._PostService.listarBlog(limite, iniciar).subscribe(
      result => {
        console.log(result['data']);
      },
      error => {
        let mensajeerror = <any>error;
        console.log(mensajeerror);
      }
    );
  }

  listarPost = (limite, iniciar) => {
    this._PostService.listarPost(limite, iniciar).subscribe(
      result => {
        this.temp = result['data'];
        this.rows = result['data'];
        console.log(this.temp);
      },
      error => {
        let mensajeerror = <any>error;
        console.log(mensajeerror);
      }
    );
  }

  onActivate(event) {
    this._Router.navigate(['/blog/post/'+event.row.id]);
  }

  updateFilter(event) {
    const val = event.target.value;
    // filter our data
    const temp = this.temp.filter(function (d) {
      return d.blgp_titulo.toLowerCase().indexOf(val) !== -1 || !val;
    });
    // update the rows
    this.rows = temp;
  }
}
