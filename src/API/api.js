export const users = [];

async function fetchUsers() {
    const personnes = await fetch('https://dummyjson.com/users')
    const data = await personnes.json()
    return data;
}
// récupérer les posts

export const post = [];

async function fetchPost() {
    const posts = await fetch('https://dummyjson.com/posts')
    const data = await posts.json()
    return data;
}