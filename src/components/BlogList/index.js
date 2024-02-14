// Write your JS code here
import BlogItem from '../BlogItem'
import './index.css'

const BlogList = props => {
  const {blogsList} = props
  return (
    <ul className="list-container-blog">
      {blogsList.map((eachItem) =>(<BlogItem blogsList={eachItem} key={eachItem.id}/>))}
    </ul>
  )
}
export default BlogList
