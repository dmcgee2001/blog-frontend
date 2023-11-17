// /* eslint-disable react/prop-types */
// export function PostsIndex(props) {
//   console.log(props);
//   return (
//     <div id="posts-index">
//       <h1 className="All-posts">All Posts</h1>
//       <div className="col">
//         <div className="card" style={{ width: "18rem" }}>
//           {props.posts.map((post) => (
//             <div key={post.id} className="card-body">
//               <h2 className="card-title">{post.title}</h2>
//               <p className="card-text">{post.body}</p>
//               <img src={post.image} className="card-img-top" alt="" />
//               <button onClick={() => props.onShowPost(post)}>More Info</button>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
export function PostsIndex(props) {
  return (
    <div>
      <h1>Here Are All the Posts!</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {props.posts.map((post) => (
          <div className="col" key={post.id}>
            <div className="card">
              <img src={post.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{post.title}</h5>
                <p className="card-text">{post.body}</p>
                <button
                  type="button"
                  onClick={() => props.onShowPost(post)}
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  Edit Post
                </button>
                {/* ;<button onClick={() => props.onShowPost(post)}>More Info</button> */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
