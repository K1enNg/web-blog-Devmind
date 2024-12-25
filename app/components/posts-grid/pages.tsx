"use client"

import React from 'react'
import PostItem from './post-item';

const PostsGrid = (props: any) => {

    const { posts } = props;
    return (
        <ul>
            {posts.map((post: any) => (<PostItem key={post.slug} post={post}/>))}
        </ul>
    )
}

export default PostsGrid