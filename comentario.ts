export const criaComentario = (nome, comentario) => {
  const postComment = document.createElement("div");
  postComment.classList.add("comment");
  postComment.innerHTML += ` 
        
        <ul class="lista-comment">
            <li >
              <span class="user-coment">${nome}</span>
              <div class="container-lista-comment">
                <span class="n-comment">${comentario}</span>
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
      
    `;
  return postComment;
};
