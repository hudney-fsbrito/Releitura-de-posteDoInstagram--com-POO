export const criaComentario = () => {
    const postComment = document.createElement('div')
    postComment.classList.add('comment')
     postComment.innerHTML += ` 
        <div class="comment">
          <ul class="lista-comment">
            <li >
              <span class="user-coment">user_name</span>
              <div class="container-lista-comment">
                <span class="n-comment">Comentário bacana</span>
                <button class="exclui-comment">
                  <i class="fa fa-trash"></i>
                </button>
              </div>
            </li>
          </ul>
          <section class="container-comment">
            <input id="input-comment" type="text" placeholder="Comentário" />
            <button class="btn-add-comentario">
              <i class="fa fa-plus"></i>
            </button>
          </section>
        </div>
    `
    return postComment
}