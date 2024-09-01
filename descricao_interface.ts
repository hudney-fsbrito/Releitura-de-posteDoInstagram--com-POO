//Função para criar a descrição da postagem

export const criaDescricao = () => {
    const div = document.createElement('div')
    div.classList.add('post-description')
    
    const p1 = add_paragrafo("your title here")
    const p2 = add_paragrafo("#hastag")
    const p3 = add_paragrafo("#loremipsum")

    div.appendChild(p1)
    div.appendChild(p2)
    div.appendChild(p3)

    return div
}

function add_paragrafo(texto:string) {
    const p = document.createElement('p')
    p.innerText = texto;

    return p
}