import React from "react";
// import UserCard from "./UserCard"; //
import PostCard from "./PostCard";
import postsData from "./postsData";

function Exercise() {
  return (
    <><div className="min-h-screen bg-gray-100 p-6">
  <h1 className="text-3xl font-bold text-center mb-6 text-red-600">
    Post Cards
  </h1>

 <div className="max-w-6xl mx-auto grid grid-cols-6 gap-6">
  {postsData.map((post) => (
    <PostCard
      key={post.id}
      id={post.id}
      userId={post.userId}
      title={post.title}
      body={post.body}
    />
  ))}
</div>

</div>

    </>
  );
}

export default Exercise;