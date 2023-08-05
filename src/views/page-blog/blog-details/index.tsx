import React, { Fragment } from 'react'
import BlogHeader from './components/BlogHeader'
import BlogDescription from './components/BlogDescription'
type Props = {}

const BlogDetailsUI = (props: Props) => {
  return (
    <Fragment>
      <div className="_container py-10">
        {/* blog header */}
        <BlogHeader />
        {/* blog header end */}
        {/* blog Descriiption */}
        <BlogDescription />
        {/* blog Descriiption end */}
      </div>
      </Fragment >
)
}

      export default BlogDetailsUI