// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogsList} = props
  const {title, description, publishedDate} = blogsList
  return (
    <li>
      <div className="title-publisheddate-container">
        <h1 className="title-text">{title}</h1>
        <p className="publishedDate-text">{publishedDate}</p>
      </div>
      <p className="description-text">{description}</p>
    </li>
  )
}
export default BlogItem
