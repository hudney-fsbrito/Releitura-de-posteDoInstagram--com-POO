const main = document.querySelector('.post')
const post_container = document.createElement('div')
function criaPosteInstagram() {
    post_container.classList.add('post-container')
    main.appendChild(post_container)
}

criaPosteInstagram()
