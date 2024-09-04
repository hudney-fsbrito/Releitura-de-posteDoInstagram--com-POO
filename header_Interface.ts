// Função principal para criar o cabeçalho
export const header = () => {
  const post_header = document.createElement("div");
  post_header.classList.add("post-header");

  const left = header_left();
  const right = header_right();

  post_header.appendChild(left);
  post_header.appendChild(right);

  return post_header;
};

// Função para criar a parte esquerda do cabeçalho
const header_left = () => {
  const left = document.createElement("div");
  left.classList.add("left");

  const avatar_image = document.createElement("div");
  avatar_image.classList.add("avatar-image");

  const imgAvatar = document.createElement("img");
  imgAvatar.classList.add("imgAvatar");
  imgAvatar.src = "./assets/ioda.jpg";

  avatar_image.appendChild(imgAvatar);

  const span = document.createElement("span");
  span.innerText = "user_name";

  left.appendChild(avatar_image);
  left.appendChild(span);

  return left;
};

// Função para criar a parte direita do cabeçalho
const header_right = () => {
  const right = document.createElement("div");
  right.classList.add("right");

  const containerFollow = document.createElement("div");
  containerFollow.classList.add("containerFollow");
  const textoFollow = document.createElement("div");
  textoFollow.classList.add("textoFollow");
  textoFollow.innerText = "follow";
  textoFollow.addEventListener("click", follow);
  containerFollow.appendChild(textoFollow);

  const div = document.createElement("div");
  const i = document.createElement("i");
  i.classList.add("fa");
  i.classList.add("fa-ellipsis-h");
  i.classList.add("fa-lg");
  div.appendChild(i);

  right.appendChild(containerFollow);
  right.appendChild(div);

  return right;
};

let isFollow = false;

function follow() {
  isFollow = !isFollow;
  const containerFollow = document.getElementsByClassName("containerFollow")[0];
  const btn_follow = containerFollow.children[0];
  if (isFollow) {
    btn_follow.classList.add("following");
    btn_follow.innerHTML = "following";
    return;
  }
  btn_follow.innerHTML = "follow";
  btn_follow.classList.remove("following");
}
