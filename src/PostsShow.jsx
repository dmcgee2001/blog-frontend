export function PostsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdatePost(props.post.id, params);
    event.target.reset();
  };
  return (
    <div id="posts-show">
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input defaultValue={props.post.title} type="text" name="title" id="" />
        </div>
        <div>
          Body: <input defaultValue={props.post.body} type="text" name="body" id="" />
        </div>
        <div>
          Image URL: <input defaultValue={props.post.image} type="text" name="image" />
        </div>
        <div>
          <button type="submit">Update</button>
        </div>
      </form>
    </div>
  );
}
