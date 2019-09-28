const url = 'https://jsonplaceholder.typicode.com';

export const getUsers = async () => {
  const usersFetched = await fetch(`${url}/users`);
  const users = await usersFetched.json();

  return users;
}

export const getPosts = async (userId) => {
  const postsFetched = await fetch(`${url}/posts?userId=${userId}`);
  const posts = await postsFetched.json();

  return posts;
}

export const getComments = async (postId) => {
  const commentsFetched = await fetch(`${url}/comments?postId=${postId}`);
  const comments = await commentsFetched.json();

  return comments;
}