// import { randomUUID } from "node:crypto";
import { v4 as randomUUID } from "uuid";
import { faker } from "@faker-js/faker";

import { criaPosteInstagram } from "./poste_Interface";

import { criaDescricao } from "./descricao_interface";
import { header } from "./header_Interface";
import { imagePost } from "./imagePost";
import { criaInformacao as info } from "./informacao_do_Post";
import { postIncons } from "./interation_Interface";
import { criaComentario } from "./comentario";

class Post {
  private _id: string = randomUUID();

  private _userName: string;
  private _avatarUrl: string;
  private _imageUrl: string;
  private _descricao: string;

  private _isLiked: boolean = false;
  private _numberOfLive: number = 0;
  private _createDate: Date = new Date();
  private _comentario: string;
  private _userComment:string;

  constructor(
    userName: string,
    avatarUrl: string,
    imageUrl: string,
    descricao: string,
    comentario: string,
    userComment:string,
  ) {
    this._userName = userName;
    this._avatarUrl = avatarUrl;
    this._imageUrl = imageUrl;
    this._descricao = descricao;
    this._comentario = comentario;
    this._userComment = userComment;
  }

  // Função para curtir a postagem e contabilizar curtida - Deixa o ícone heart vermelho
  like() {
    //Altera o estado de 'like'
    this._isLiked = !this._isLiked;
  
    //Atualiza o contador de 'like'
    if (this._isLiked === true) {
      this._numberOfLive += 1;
      
    } else {
      this._numberOfLive -= 1;
    }
    
    //Atualiza o DOM

    //Atualiza ícone de like
    const post = document.getElementById(this._id);
    const btnLike = post?.querySelector(".btn-like");

    if(btnLike) {
      const icon = btnLike.children[0];

      if (this._isLiked) {
        icon.classList.remove("fa-heart-o");
        icon.classList.add("liked");
        icon.classList.add("fa-heart");
        // console.log(this._numberOfLive);
        
      } else {
        icon.classList.remove("fa-heart");
        icon.classList.remove("liked");
        icon.classList.add("fa-heart-o");
        // console.log(this._numberOfLive);
      }
    
    }

    //Atualiza número de like
    const div_curtidas = post?.querySelector('.numlike')
    if (div_curtidas) {

      div_curtidas.innerHTML = this._numberOfLive.toString()
      
    }
    
  }

  //'Renderiza' as postagens no DOM
  hender(
    userName: string,
    avatarUrl: string,
    imageUrl: string,
    descricao: string,
    comentario: string,
    userComment:string,
  ) {
    this._userName = userName;
    this._avatarUrl = avatarUrl;
    this._imageUrl = imageUrl;
    this._descricao = descricao;
    this._comentario = comentario;
    this._userComment = userComment;
    let henderPost = criaPosteInstagram(
      header(userName, avatarUrl, this._id),
      imagePost(imageUrl, this._id),
      postIncons(this._id, () => this.like()),
      info(this._numberOfLive, () => this.like()),
      criaDescricao(descricao),
      criaComentario(userComment, comentario),
      this._id
    );
    return henderPost;
  }
}

// Cria instâncias da classe Post com dados fictícios
const posts: Post[] = [];
for (let index = 0; index < 15; index++) {
  const post = new Post(
    faker.person.firstName(),
    faker.image.avatarGitHub(),
    faker.image.urlPicsumPhotos(),
    faker.lorem.paragraph(),
    faker.lorem.sentence(),
    faker.person.lastName(),
  );
  posts.push(post);
  
  //Chama a renderização para cada postagem
  post.hender(
    faker.person.firstName(),
    faker.image.avatarGitHub(),
    faker.image.urlPicsumPhotos(),
    faker.lorem.slug(),
    faker.lorem.words(),
    faker.person.lastName(),
  );

}