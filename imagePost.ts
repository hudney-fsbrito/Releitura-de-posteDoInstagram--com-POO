// Função para criar a imagem da postagem
export const imagePost = () => {
    const div = document.createElement('div')
    div.classList.add('post-image')

    const img = document.createElement('img')
    img.classList.add("imgPostagem")
    img.src = "./assets/pexels-starWars.jpg"

    div.appendChild(img)

    return div
}