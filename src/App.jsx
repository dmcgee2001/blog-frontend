function Header() {
  return (
    <header>
      <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
    </header>
  );
}
function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New post</h1>
      <div>
        Title: <input type="text" name="" id="" />
      </div>
      <div>
        Body: <input type="text" name="" id="" />
      </div>
      <div>
        Image: <input type="image" src="" alt="" />
      </div>
      <div>
        <button>Post</button>
      </div>
    </div>
  );
}

function PostsIndex(props) {
  console.log(props);
  return (
    <div id="posts-index">
      <h1>All posts</h1>
      {props.posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
          <img src="{post.image}" alt="" />
          <button>Edit Post</button>
        </div>
      ))}
    </div>
  );
}
function Footer() {
  return (
    <footer>
      <p>Copyright 20XX</p>
    </footer>
  );
}
function Content() {
  let posts = [
    {
      id: 1,
      title: "Title is Here",
      body: "Body is Here",
      image: "___",
    },
    {
      id: 2,
      title: "Title or Something",
      body: "Body of blog. This is the body of a blog post and now I have to find an image url to try and get an image for a random blog post.",
      image: "___",
    },
    {
      id: 3,
      title: "Title Yo",
      body: "This is the body of an example blog post that requires words inside of it so here are some words and some more words.",
      image: "___",
    },
  ];
  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} />
    </div>
  );
}
function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
