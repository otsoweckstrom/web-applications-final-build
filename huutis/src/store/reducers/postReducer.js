var initState = {
  posts: []
};

async function getPosts() {
  const response = await fetch("http://localhost:4000/posts");
  const myJson = await response.json();
  initState.posts = myJson.data;
  console.log(initState.posts);
  console.log(myJson.data);
}

const postReducer = (state = initState) => {
  getPosts();

  return state;
};

export default postReducer;
