"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import { randomUUID } from "node:crypto";
var uuid_1 = require("uuid");
var faker_1 = require("@faker-js/faker");
var Post = /** @class */ (function () {
    function Post(userName, avatarUrl, imageUrl, descricao) {
        this._id = (0, uuid_1.v4)();
        this._isLiked = false;
        this._numberOfLive = 0;
        this.createDate = new Date();
        this._userName = userName;
        this._avatarUrl = avatarUrl;
        this._imageUrl = imageUrl;
        this._descricao = descricao;
    }
    Post.prototype.like = function () {
        this._isLiked = !this._isLiked;
        if (this._isLiked === true) {
            this._numberOfLive += 1;
        }
        else {
            this._numberOfLive -= 1;
        }
    };
    return Post;
}());
// Cria instâncias da classe Post com dados fictícios
var posts = [];
for (var index = 0; index < 15; index++) {
    var post = new Post(faker_1.faker.person.firstName(), faker_1.faker.image.avatarGitHub(), faker_1.faker.image.urlPicsumPhotos(), faker_1.faker.lorem.paragraph());
    posts.push(post);
}
window.Post = Post;
// console.log(posts);
var firstPost = posts[0];
firstPost.like();
console.log(firstPost);
firstPost.like();
console.log(firstPost);
console.log(posts);
