function App() {
  return (
    <div>
      <header>
        <a href="#">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
      </header>

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
      </div>

      <div id="posts-index">
        <h1>All posts</h1>
        <div>
          <h3>Blog Post 1</h3>
          <img src="" alt="" />
          <p>This is the body of the first blog post.</p>
        </div>
        <div>
          <h3>Blog Post 2</h3>
          <img src="" alt="" />
          <p>This is the body of the second blog post.</p>
        </div>
      </div>

      <footer>
        <p>Copyright 20XX</p>
      </footer>
    </div>
  );
}

export default App;
