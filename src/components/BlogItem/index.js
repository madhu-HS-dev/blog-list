// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {userDetails} = props
  const {title, description, publishedDate} = userDetails
  return (
    <li>
      <div className="title-container">
        <h1 className="title">{title}</h1>
        <p className="published-date">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
      <hr className="line" />
    </li>
  )
}

export default BlogItem
