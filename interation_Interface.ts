// Função principal para criar o ícones de interação
export const postIncons = () => {
    const div_interacao = document.createElement("div");
    div_interacao.classList.add("post-icons");
  
    const left = div_left();
    const right = div_right();
  
    div_interacao.appendChild(left);
    div_interacao.appendChild(right);
  
    return div_interacao;
  };
  
  // Função para criar a parte esquerda dos ícones
  const div_left = () => {
    const left = document.createElement("div");
  
    const i_heart = document.createElement("i");
    i_heart.classList.add("fa");
    i_heart.classList.add("fa-heart-o");
    i_heart.classList.add("fa-lg");
    i_heart.ariaHidden = "true"
    left.appendChild(i_heart);
    
    const i_comment = document.createElement("i");
    i_comment.classList.add("fa");
    i_comment.classList.add("fa-comment-o");
    i_comment.classList.add("fa-lg");
    i_comment.ariaHidden = "true"
    left.appendChild(i_comment);

    const i_plane = document.createElement("i");
    i_plane.classList.add("fa");
    i_plane.classList.add("fa-paper-plane-o");
    i_plane.classList.add("fa-lg");
    i_plane.ariaHidden = "true"
    left.appendChild(i_plane);
  
  
    return left;
  };
  
//   Função para criar a parte direita dos ícones
  const div_right = () => {
    const right = document.createElement("div");
    right.classList.add("right");

  
    const div = document.createElement("div");
    const i = document.createElement("i");
    i.classList.add("fa");
    i.classList.add("fa-bookmark-o");
    i.classList.add("fa-lg");
    div.appendChild(i);
  
    right.appendChild(div);
  
    return right;
  };
  