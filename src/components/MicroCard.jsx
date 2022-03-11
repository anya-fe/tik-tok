import React from 'react'

const MicroCard = ({ user, toggleFollow }) => {
  return (
    <div className="section microcard">
      <img className="user-profile" alt="" src={user.avatar} width={'100%'} />
      <div>
        <h3 className="bold">{user.username}</h3>
        <p>{user.name}</p>
      </div>
      {user.button_visible && <div className={user.is_followed? "followed-button" : "follow-button"}
        onClick={() => toggleFollow(user)}
      >
      {user.is_followed? "Following": "Follow"}
      </div>}
    </div>
  )
}
  
export default MicroCard