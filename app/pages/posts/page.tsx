import AllPosts from '@/app/components/all-posts/page'
import React from 'react'

const DUMMY_POSTS: any[] = [
  {
    title: 'I created an ELITE Web Page',
    image: 'elite-webpage.png',
    desc: 'My very first React project',
    date: '2024-12-25',
    slug: 'i-created-an-elite-web-page'
  },
  { title: 'Has AI controlled the world?', 
    image: "ai.png", 
    desc: 'A controversary whether artificial intelligence has take human place', 
    date: '2024-12-25', 
    slug: "has-ai-controlled-the-world"
  }
];

const Posts = () => {
  return (
    <AllPosts posts={DUMMY_POSTS}/>
  )
}

export default Posts