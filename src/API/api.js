async function fetchUsers() {
  const personnes = await fetch("https://dummyjson.com/users?limit=208");
  const data = await personnes.json();
  return data;
}
// récupérer les posts

async function fetchPost() {
  const posts = await fetch("https://dummyjson.com/posts");
  const data = await posts.json();
  return data;
}

async function fetchPostsByUserId(id) {
  fetch(`https://dummyjson.com/users/${id}/posts`)
    .then((res) => res.json())
    .then(console.log);
}

async function fetchCommentsByPostId(id) {
  fetch(`https://dummyjson.com/posts/${id}/comments`)
    .then((res) => res.json())
    .then(console.log);
}

async function login(userName, passeWord) {
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username: userName,
      password: passeWord,
    }),
  });
  const data = await response.json();
  return data;
}
// async function searchUser(value){
// fetch(`https://dummyjson.com/users/search?q=${value}`)
// .then(res => res.json())
// .then(console.log);
// }

export { fetchUsers, fetchPost, login, fetchPostsByUserId };
