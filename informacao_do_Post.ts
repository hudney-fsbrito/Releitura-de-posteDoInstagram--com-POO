// Função para criar informações de quantidades de likes
export const criaInformacao = (numberOfLike, like) => {
    const div = document.createElement('div');
    div.classList.add("post-info")

    const div_icon = document.createElement("div");
    const i = document.createElement("i");
    i.classList.add("fa");
    i.classList.add("fa-heart");
    i.classList.add("fa-lg");
    i.ariaHidden = "true"
    div_icon.appendChild(i);

    const div_curtidas = document.createElement('div')
    div_curtidas.classList.add('numlike')
    div_curtidas.innerText = numberOfLike
    div_curtidas.addEventListener("", () => like)


    const div_likes = document.createElement('div')
    div_likes.classList.add("post-likes")
    div_likes.innerText = "likes"
    
    div.appendChild(div_icon);
    div.appendChild(div_curtidas);
    div.appendChild(div_likes);

    return div


};
