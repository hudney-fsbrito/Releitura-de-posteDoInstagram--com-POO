// import { randomUUID } from "node:crypto";
import {v4 as randomUUID} from "uuid"
import { faker } from "@faker-js/faker";

class Post {
  private _id: string = randomUUID();

  private _userName: string;
  private _avatarUrl: string;
  private _imageUrl: string;
  private _descricao: string;

  private _isLiked: boolean = false;
  private _numberOfLive: number = 0;
  private createDate: Date = new Date();

  constructor(
    userName: string,
    avatarUrl: string,
    imageUrl: string,
    descricao: string
  ) {
    this._userName = userName;
    this._avatarUrl = avatarUrl;
    this._imageUrl = imageUrl;
    this._descricao = descricao;
  }

  like(){
    this._isLiked = !this._isLiked;

    if (this._isLiked === true) {
        this._numberOfLive += 1;
    } else {
        this._numberOfLive -= 1;
    }

  }

  henderImagePost(){
    let image:string;
    return image = this._imageUrl;
  }
}

// Cria instâncias da classe Post com dados fictícios
const posts: Post[] = [];
for (let index = 0; index < 15; index++) {
  const post = new Post(
    faker.person.firstName(),
    faker.image.avatarGitHub(),
    faker.image.urlPicsumPhotos(),
    faker.lorem.paragraph()
  );
  posts.push(post);
}
(window as any).Post = Post;
// console.log(posts);
const firstPost = posts[0];
firstPost.like()
console.log(firstPost);
firstPost.like()
console.log(firstPost);


console.log(posts);


