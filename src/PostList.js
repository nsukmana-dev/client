import React, { useState, useEffect } from "react";
import axios from "axios";

const PostList = () => {
  useEffect(() => {
    fetchPost();
  }, []);

  const [posts, setPosts] = useState({});

  const fetchPost = async () => {
    const res = await axios.get("http://localhost:4000/posts");

    setPosts(res.data);
  };

  const renderPosts = Object.values(posts).map((post) => {
    return (
      <div
        className="card"
        style={{ width: "30%", marginBottom: "20px" }}
        key={post.id}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
        </div>
      </div>
    );
  });

  return (
    <div className="d-flex flex-row flex-warp justify-content-between ">
      {renderPosts}
    </div>
  );
};

export default PostList;
