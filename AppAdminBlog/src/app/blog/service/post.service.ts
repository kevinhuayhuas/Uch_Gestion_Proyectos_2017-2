import { Injectable } from '@angular/core';
import { Http, Response, Headers, Request, RequestOptions, RequestMethod } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

  constructor(private http: Http) { }

  setheader = () => {
    let headers = new Headers();
    // headers.append("Access-Control-Allow-Origin", "http://localhost:4200");
    return headers;
  }

  listarBlog = (limite, iniciar) => {
    let urlConsulta = "http://apimdc.sonovin.com/public/index.php/blog/listar/" + limite + "/" + iniciar;
    let headers = this.setheader();
    return this.http.get(urlConsulta, { headers: headers }).map(res => res.json());
  }

  listarPost = (limite, iniciar) => {
    let urlConsulta = "http://apimdc.sonovin.com/public/index.php/post/listar/" + limite + "/" + iniciar;
    let headers = this.setheader();
    return this.http.get(urlConsulta, { headers: headers }).map(res => res.json());
  }
  listarUsers = (limite, iniciar) => {
    let urlConsulta = "http://apimdc.sonovin.com/public/index.php/user/listar/" + limite + "/" + iniciar;
    let headers = this.setheader();
    return this.http.get(urlConsulta, { headers: headers }).map(res => res.json());
  }
  newPost = (post) => {
    let nuevo = {
      "blgp_titulo": post.titulo,
      "blgp_descripcion": post.descripcion,
      "blgp_autor": post.autor,
      "blgp_blog": post.blog,
      "blgp_fechaactualizacion": new Date(),
      "blgp_tag": post.tags,
      "blgp_image": post.image,
      "blgp_estado": post.estado
    };
    let urlConsulta = "http://apimdc.sonovin.com/public/index.php/post/registrar";
    let headers = this.setheader();
    return this.http.post(urlConsulta, nuevo, { headers: headers }).map(res => res.json());
  }

  getPost = (id) => {
    let urlConsulta = "http://apimdc.sonovin.com/public/index.php/post/obtener/" + id;
    let headers = this.setheader();
    return this.http.get(urlConsulta, { headers: headers }).map(res => res.json());
  }


  listarEvento = (limite, iniciar) => {
    let urlConsulta = "http://apimdc.sonovin.com/public/index.php/evento/listar/" + limite + "/" + iniciar;
    let headers = this.setheader();
    return this.http.get(urlConsulta, { headers: headers }).map(res => res.json());
  }

}
