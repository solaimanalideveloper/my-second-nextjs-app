import React from "react";

const PostIdPage = async ({ params }) => {
  const { postId } = await params;

  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const postDetailsData = await response.json();
  const {id, title, body} = postDetailsData;

  return (
    <div className="card bg-primary text-primary-content w-96">
      <div className="card-body">
        <h2>Button click with Post Details show.</h2>
        <p>Post Id: {id}</p>
        <h2>Post Title: {title}</h2>
        <p>Post Body: {body}</p>
      </div>
    </div>
  );
};

export default PostIdPage;
