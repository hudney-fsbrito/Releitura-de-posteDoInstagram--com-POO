

//Cria o container da postagem e adiciona as seções
export function criaPosteInstagram(header, postImage, postIcons, postInfo, postDescricao) {
  //Busca o contaner principal no html
  const main = document.querySelector(".post");
  //cria o container da postagem
  const post_container = document.createElement("div");
  post_container.classList.add("post-container");
  main.appendChild(post_container);

  //Adiciona todas as seções dentro do container da postagem
  post_container.appendChild(header);
  post_container.appendChild(postImage);
  post_container.appendChild(postIcons);
  post_container.appendChild(postInfo);
  post_container.appendChild(postDescricao);
}

