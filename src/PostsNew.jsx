export function PostsNew() {
  return (
    <div id="posts-new">
      <h1>New Post</h1>
      <form method="POST" action="http://localhost:3000/posts.json">
        <div>
          Title: <input type="text" name="title" id="" />
        </div>
        <div>
          Body: <input type="text" name="body" id="" />
        </div>
        <div>
          Image URL: <input type="text" name="image" />
        </div>
        <div>
          <button type="submit">Post</button>
        </div>
      </form>
    </div>
  );
}
