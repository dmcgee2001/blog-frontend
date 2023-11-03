import { PostsIndex } from "./PostsIndex";
import { PostsNew } from "./PostsNew";

export function Content() {
  let posts = [
    {
      id: 1,
      title: "Title is Here",
      body: "Body is Here",
      image: "https://lightlysketched.com/wp-content/uploads/2022/07/IMG-1867-1024x1024.png",
    },
    {
      id: 2,
      title: "Title or Something",
      body: "Body of blog. This is the body of a blog post and now I have to find an image url to try and get an image for a random blog post.",
      image: "https://easydrawingguides.com/wp-content/uploads/2018/10/Banana-10.png",
    },
    {
      id: 3,
      title: "Title Yo",
      body: "This is the body of an example blog post that requires words inside of it so here are some words and some more words.",
      image: "https://easydrawingguides.com/wp-content/uploads/2020/03/Orange-Step-10.png",
    },
  ];
  return (
    <div>
      <PostsNew />
      <PostsIndex posts={posts} />
    </div>
  );
}
