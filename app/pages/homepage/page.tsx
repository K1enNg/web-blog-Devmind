import FeaturedPosts from '@/app/components/featured-posts/page'
import Hero from '@/app/components/hero/page'
import React, { Fragment } from 'react'

const DUMMY_POSTS: any[] = [
  { title: 'Has AI controlled the world?', 
    image: "ai.png", 
    desc: 'A controversary whether artificial intelligence has take human place', 
    date: '2024-12-25', 
    slug: "has-ai-controlled-the-world"
  },
];

const HomePage = () => {
  return (
    <Fragment>
        <Hero />
        <FeaturedPosts posts={DUMMY_POSTS}/>
    </Fragment>
  )
}

export default HomePage