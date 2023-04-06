export default function Profile() {

  const dummyData = {
    username: "John Smith",
    avatar: "",
  }
  
  return (
    <div className="profile">
      <img className="profile-avatar" src={dummyData.avatar}></img>
      <button>Edit Avatar</button>
      <div>{dummyData.username}</div>
      <button>Edit Username</button>
      <button>Log Out</button>
    </div>
  )
}