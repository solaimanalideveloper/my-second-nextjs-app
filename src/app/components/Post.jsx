import Link from "next/link";
import React from "react";

const Post = ({ post }) => {
  const { id, title, body } = post;
  return (
    <div className="card bg-primary text-primary-content w-96">
      <div className="card-body">
        <h1>Posts Id Number: {id}</h1>
        <h2 className="card-title">{title}</h2>
        <p>{body}</p>
        <div className="card-actions justify-end">
          <Link href={`/posts/${id}`}>
            <button className="btn">Post Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Post;
