//Função para criar a descrição da postagem

export const criaDescricao = (descricao) => {
    const div = document.createElement('div')
    div.classList.add('post-description')
    
    const p1 = add_paragrafo(descricao)
   

    div.appendChild(p1)


    return div
}

function add_paragrafo(texto:string) {
    const p = document.createElement('p')
    p.innerText = texto;

    return p
}