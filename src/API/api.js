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

export { fetchUsers, fetchPost };
