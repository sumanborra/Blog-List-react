// Write your JS code here
import './index.css'

const UserInfo = () => {
  return (
    <div className="userInfo-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/profile-img.png "
        alt="profile"
        className="user-imfo-image"
      />
      <h1 className="heading-profile">Wade warren</h1>
      <p className="profile-designation">Software developer at UK</p>
    </div>
  )
}
export default UserInfo
