// /* eslint-disable react/prop-types */

import { useState } from "react";

export function PostsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");
  return (
    <div>
      <form className="d-flex" role="search">
        <input
          className="form-control me-2"
          type="text"
          value={searchFilter}
          onChange={(event) => setSearchFilter(event.target.value)}
          placeholder="Search"
          aria-label="Search"
          list="titles"
        />
      </form>
      <datalist id="titles">
        {props.posts.map((post) => (
          <option key={post.id}>{post.title}</option>
        ))}
      </datalist>
      <h1>Here Are All the Posts!</h1>
      <div className="row row-cols-1 row-cols-md-3 g-4">
        {props.posts
          .filter((post) => post.title.toLowerCase().includes(searchFilter.toLowerCase()))
          .map((post) => (
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
