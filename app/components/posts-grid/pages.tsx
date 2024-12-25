"use client"

import React from 'react';
import PostItem from '../post-item/page';

const PostsGrid = (props: any) => {
  const { posts } = props;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {posts.map((post: any) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </div>
  );
};

export default PostsGrid;
