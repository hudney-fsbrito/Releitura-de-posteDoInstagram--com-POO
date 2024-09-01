import { header } from "./headerInterface";

const main = document.querySelector(".post");

//Cria o container da postagem e adiciona as seções
function criaPosteInstagram(header) {
  const post_container = document.createElement("div");
  post_container.classList.add("post-container");
  main.appendChild(post_container);

  post_container.appendChild(header);
}


criaPosteInstagram(header());
