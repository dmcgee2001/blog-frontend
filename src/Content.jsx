import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";
import { Modal } from "./Modal";
import { useState } from "react";
import axios from "axios";
export function Content() {
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);

  const handleShowPost = () => {
    setIsPostsShowVisible(true);
  };

  const [posts, setPosts] = useState([]);

  const handleIndexPosts = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    });
  };

  const handleClose = () => {
    setIsPostsShowVisible(false);
  };

  return (
    <div>
      <PostsNew />
      <button onClick={handleIndexPosts}>Load Posts</button>
      <PostsIndex posts={posts} onShowPost={handleShowPost} />
      <Modal show={isPostsShowVisible} onClose={handleClose}>
        <p>Hello, testing testing.</p>
      </Modal>
    </div>
  );
}
