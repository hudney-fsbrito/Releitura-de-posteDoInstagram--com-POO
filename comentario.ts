export const criaComentario = (nome, comentario) => {
  const postComment = document.createElement("div");
  postComment.classList.add("comment");
  postComment.innerHTML += ` 
        
        <ul class="lista-comment">
            
        </ul>
        <section class="container-comment">
            <input id="input-comment" value="" type="text" placeholder="Comentário" />
            <button class="btn-add-comentario">
              <i class="fa fa-plus"></i>
            </button>
        </section>
      
    `;

  const btnAddComentario = postComment.querySelector(".btn-add-comentario");
  const inputComment = postComment?.querySelector("#input-comment");

  if (btnAddComentario && inputComment) {
    btnAddComentario.addEventListener("click", (e) => {
      if (inputComment?.nodeValue != "") {
        let comentrio = {
          comentarioNovo: inputComment.value,
          // id: gerarId(),
        };
        if (comentrio.comentarioNovo) {
          addComentario(comentrio.comentarioNovo);
          inputComment.value = "";
        }
      }
    });

    inputComment.addEventListener("keypress", (e) => {
      if (inputComment?.nodeValue != "") {
        if (e.keyCode == 13) {
          let comentrio = {
            comentarioNovo: inputComment.value,
            // id: gerarId(),
          };
          if (comentrio.comentarioNovo) {
            addComentario(comentrio.comentarioNovo);
            inputComment.value = "";
          }
        }
      }
    });
  }
  function addComentario(comentario) {
    const ul = postComment?.querySelector(".lista-comment");
    const li = document.createElement("li");

    if (ul) {
      ul.innerHTML += `
            
            <li >
                  <span class="user-coment">${nome}</span>
                  <div class="container-lista-comment">
                    <span class="n-comment">${comentario}</span>
                    <button class="exclui-comment">
                      <i class="fa fa-trash"></i>
                    </button>
                  </div>
            </li>
            
            `;
    }
  }
  return postComment;
};

/* 
input.addEventListener("keypress", (e) => {

    if (input.value != '') {
        if (e.keyCode == 13) {
            let comentario = {
                nome: input.value,
                id: gerarId(),
            }
            criarComentario(comentario)
        }
    }
});
addComentario.addEventListener("click", (e) => {

    if (input.value != '') {
        let tarefa = {
            nome: input.value,
            id: gerarId(),
        }
        if (tarefa.nome) {
            criarComentario(comentario)
        }
    }
});

*/
