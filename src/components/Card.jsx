import React from "react";

const Card = ({ user, toggleFollow }) => {
  return (
    <div className="card">
      <div className="break"></div>
      <div className="section">
        <div className="user-info">
          <img
            src={user.avatar}
            alt=""
            width={"100%"}
            className="user-profile"
          />
          <div>
            <div className="section">
              <h3 className="bold">{user.username}</h3>
              <p className="username">{user.name}</p>
              <p>{user.timestamp}</p>
            </div>
            <p>{user.caption}</p>
          </div>
        </div>
        {user.button_visible && (
          <div
            className={user.is_followed ? "followed-button" : "follow-button"}
            onClick={() => toggleFollow(user)}
          >
            {user.is_followed ? "Following" : "Follow"}
          </div>
        )}
      </div>
      <video controls className="video">
        <source src={user.video} type="video/mp4" />
      </video>
      <div className="section socials">
        <i className="far fa-heart"></i>
        <div className="social-tag">{user.likes}</div>
        <i className="far fa-comment-dots"></i>
        <div className="social-tag">{user.comments}</div>
        <i className="far fa-share-square"></i>
      </div>
    </div>
  );
};

export default Card;
