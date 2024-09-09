// Função para criar a imagem da postagem
export const imagePost = (imageUrl) => {
    const div = document.createElement('div')
    div.classList.add('post-image')

    div.addEventListener('click', zoomImagem)

    const img = document.createElement('img')
    img.classList.add("imgPostagem")
    img.src = imageUrl

    div.appendChild(img)

    return div
}

let zoom: boolean = false;

function zoomImagem() {
    zoom = !zoom
    const divImagem = document.getElementsByClassName("post-image")[0];
    
    if (zoom) {
        divImagem.classList.add('post-image-zoom')
        return
    }
    divImagem.classList.remove('post-image-zoom')
}