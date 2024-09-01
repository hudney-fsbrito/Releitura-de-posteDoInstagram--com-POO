class Post {
    private _userName: string;
    private _imageUrl: string;
    private _descricao: string;
    private _numLikes: number;
    
    constructor(userName: string,imageUrl: string,descricao: string){
        this._userName = userName;
        this._imageUrl = imageUrl;
        this._descricao = descricao;
        this._numLikes = 0;
    }
    
    incrementarLike(){
        this._numLikes += 1;
    }
    
    get getUserName(){
        return this._userName
    }
    
    get getImageUrl(): string {
        return this._imageUrl;
    }
    get getDescricao(): string {
        return this._descricao;
    }
    set setDescricao(setDescricao: string) {
        this._descricao = setDescricao;
    }

    get getNumLikes(): number {
        return this._numLikes;
    }
    
}

const post1 = new Post('Hudney', 'http:/', 'Imagem_1')
console.log(post1);
const post2 = new Post('Brito', 'http:/', 'Imagem_2')
post1.setDescricao = 'Outra descrição'
console.log(post2);

post1.incrementarLike()
post1.incrementarLike()
console.log(post1);
