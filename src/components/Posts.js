import React from "react";

export default function Posts({ posts, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div>
      <ul className="list-group mb-4">
        {posts.map(post => {
          return (
            <li key={post.id} className="list-group-item">
              <h5>{post.title}</h5>
              <p>{post.body}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
