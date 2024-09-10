
// Função principal para criar o ícones de interação
export const postIncons = (id, like) => {
    const div_interacao = document.createElement("div");
    div_interacao.classList.add("post-icons");
    
    const left = div_left(id,like);
    const right = div_right(id);
  
    div_interacao.appendChild(left);
    div_interacao.appendChild(right);
  
    return div_interacao;
  };
  
  // Função para criar a parte esquerda dos ícones
  const div_left = (id,like) => {
    
    const left = document.createElement("div");

    const div_heart = document.createElement("div");
    div_heart.classList.add('btn')
    div_heart.classList.add('btn-like')

    const div_comment= document.createElement("div");
    div_comment.classList.add('btn')
    
    const div_plane = document.createElement("div");
    div_plane.classList.add('btn')
    
    
    const i_heart = document.createElement("i");
    i_heart.classList.add("fa");
    i_heart.classList.add("fa-heart-o");
    i_heart.classList.add("fa-lg");
    i_heart.ariaHidden = "true";
    div_heart.appendChild(i_heart);

    div_heart.addEventListener('click', like)
    
    left.appendChild(div_heart);
    
    const i_comment = document.createElement("i");
    i_comment.classList.add("fa");
    i_comment.classList.add("fa-comment-o");
    i_comment.classList.add("fa-lg");
    i_comment.ariaHidden = "true"
    div_comment.appendChild(i_comment);
    left.appendChild(div_comment);

    const i_plane = document.createElement("i");
    i_plane.classList.add("fa");
    i_plane.classList.add("fa-paper-plane-o");
    i_plane.classList.add("fa-lg");
    i_plane.ariaHidden = "true"
    div_plane.appendChild(i_plane);
    left.appendChild(div_plane);
    
    
    return left;
  };
  
  //   Função para criar a parte direita dos ícones
  const div_right = (id) => {
    //Cria a div da direita e add classe
    const right = document.createElement("div");
    right.classList.add("right");
    
    //Cria div para o ícone de salvar
    const div_bookmark = document.createElement("div");
    div_bookmark.classList.add('btn')
    
    //Cria div e a tag de ícone para add o ícone de salvar
    const div = document.createElement("div");
    const i = document.createElement("i");
    i.classList.add("fa");
    i.classList.add("fa-bookmark-o");
    i.classList.add("fa-lg");
    div_bookmark.appendChild(i);
    div_bookmark.classList.add('btn-save')

    //Add um evento ao ícone
    div_bookmark.addEventListener('click',() => save(id))

    div.appendChild(div_bookmark);
    
    right.appendChild(div);
  
    return right;
  };
  
  let isSaved: boolean = false;

// Função para salvar a postagem - Deixa o ícone bookmark preto
function save(id) {
  isSaved = !isSaved;

  const post = document.getElementById(id);

  const btnSave = post?.querySelector(".btn-save");
  const icon = btnSave.children[0];

  if (isSaved) {
    icon.classList.remove("fa-bookmark-o");
    icon.classList.add("saved");
    icon.classList.add("fa-bookmark");

    return;
  }

  icon.classList.remove("fa-bookmark");
  icon.classList.remove("saved");
  icon.classList.add("fa-bookmark-o");
}
