export const header = () => {
  const post_header = document.createElement("div");
  post_header.classList.add("post-header");

  const left = header_left();
  const right = header_right();

  post_header.appendChild(left);
  post_header.appendChild(right);

  return post_header;
};

const header_left = () => {
  const left = document.createElement("div");
  left.classList.add("left");

  const avatar_image = document.createElement("div");
  avatar_image.classList.add("avatar-image");

  const span = document.createElement("span");
  span.innerText = "user_name";

  left.appendChild(avatar_image);
  left.appendChild(span);

  return left;
};
const header_right = () => {
  const right = document.createElement("div");
  right.classList.add("right");

  const textoFollow = document.createElement("div");
  textoFollow.classList.add("textoFollow");
  textoFollow.innerText = "follow";

  const div = document.createElement("div");
  const i = document.createElement("i");
  i.classList.add("fa");
  i.classList.add("fa-ellipsis-h");
  i.classList.add("fa-lg");
  div.appendChild(i);

  right.appendChild(textoFollow);
  right.appendChild(div);

  return right;
};
