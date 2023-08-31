// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsListDetails} = props
  return (
    <ul className="blog-list">
      {blogsListDetails.map(eachItem => (
        <BlogItem userDetails={eachItem} key={eachItem.id} />
      ))}
    </ul>
  )
}

export default BlogList
