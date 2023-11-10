import axios from "axios";

export function PostsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreatePost(params);
    event.target.reset();
  };

  return (
    <div id="posts-new">
      <h1>New Post</h1>
      <form onSubmit={handleSubmit}>
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
