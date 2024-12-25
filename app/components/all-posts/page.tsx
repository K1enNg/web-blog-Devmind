import React from 'react'
import PostsGrid from '../posts-grid/pages'

const AllPosts = (props : any) => {
  return (
    <section>
        <h1>All Posts</h1>
            <PostsGrid posts={props.posts}/>
    </section>
)
}

export default AllPosts