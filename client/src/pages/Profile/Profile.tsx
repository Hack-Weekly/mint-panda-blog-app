import './Profile.css'
import { useState } from 'react';
import { FiEdit2, FiCheckSquare } from 'react-icons/fi';

const dummyData = {
  username: "John Smith",
  avatar: "",
}

export default function Profile() {

  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [currentUsername, setCurrentUsername] = useState(dummyData.username);

  return (
    <div className="profile">
      <img className="profile-avatar" src={dummyData.avatar}></img>
      <button>Edit Avatar</button>
      <div style={{display: 'flex', alignItems: 'center', gap: '.5rem'}}>
        {!isEditingUsername ? <span className="profile-username">{currentUsername}</span>
        : <input onChange={e => setCurrentUsername(e.target.value)} value={currentUsername}></input>
        }
        <button className="edit-button" onClick={() => setIsEditingUsername(!isEditingUsername)}>
          {isEditingUsername ? <FiCheckSquare/> : <FiEdit2/>}
        </button>
      </div>

      <button>Log Out</button>
    </div>
  )
}