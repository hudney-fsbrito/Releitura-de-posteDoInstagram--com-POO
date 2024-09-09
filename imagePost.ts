// Função para criar a imagem da postagem
export const imagePost = (imageUrl, id) => {
    const div = document.createElement('div')
    div.classList.add('post-image')

    div.addEventListener('click', (id) => {zoomImagem(id)})

    const img = document.createElement('img')
    img.classList.add("imgPostagem")
    img.src = imageUrl

    div.appendChild(img)

    return div
}

let zoom: boolean = false;

function zoomImagem(id) {
    zoom = !zoom
    const divImagem = document.getElementById(id);
    
    if (zoom) {
        divImagem.classList.add('post-image-zoom')
        return
    }
    divImagem.classList.remove('post-image-zoom')
}