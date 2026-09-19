import React from "react";
import Post from "../components/Post";

const PostPage = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const postData = await response.json();
  return (
    <div>
      <h2>Post Page: {postData.length}</h2>
      <div className="grid grid-cols-4 gap-5 p-5">
        {postData.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default PostPage;
