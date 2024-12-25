import React from 'react';
import PostsGrid from '../posts-grid/pages';

const FeaturedPosts = (props: any) => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-extrabold text-gray-900 mb-6">Featured Posts</h1>
                <PostsGrid posts={props.posts} />
      </div>
    </section>
  );
};

export default FeaturedPosts;
