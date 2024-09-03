var Post = /** @class */ (function () {
    function Post(userName, imageUrl, descricao) {
        this._userName = userName;
        this._imageUrl = imageUrl;
        this._descricao = descricao;
        this._numLikes = 0;
    }
    Post.prototype.incrementarLike = function () {
        this._numLikes += 1;
    };
    Object.defineProperty(Post.prototype, "getUserName", {
        get: function () {
            return this._userName;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "getImageUrl", {
        get: function () {
            return this._imageUrl;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "getDescricao", {
        get: function () {
            return this._descricao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "setDescricao", {
        set: function (setDescricao) {
            this._descricao = setDescricao;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Post.prototype, "getNumLikes", {
        get: function () {
            return this._numLikes;
        },
        enumerable: false,
        configurable: true
    });
    return Post;
}());
var post1 = new Post('Hudney', 'http:/', 'Imagem_1');
console.log(post1);
var post2 = new Post('Brito', 'http:/', 'Imagem_2');
post1.setDescricao = 'Outra descrição';
console.log(post2);
post1.incrementarLike();
post1.incrementarLike();
console.log(post1);
