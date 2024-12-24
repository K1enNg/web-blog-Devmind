import FeaturedPosts from '@/app/components/featured-posts/page'
import Hero from '@/app/components/hero/page'
import React, { Fragment } from 'react'

const HomePage = () => {
  return (
    <Fragment>
        <Hero />
        <FeaturedPosts />
    </Fragment>
  )
}

export default HomePage