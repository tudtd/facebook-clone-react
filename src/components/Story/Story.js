import React from 'react';
import './Story.scss';

const Story = ({ image, userAvatar, userName }) => {
  return (
    <div className="story">
      <img src={image} alt={userName} className="story__image" />
      <img className="story__user-avatar" src={userAvatar} alt={userName} />
      <h4 className="story__user-name">{userName}</h4>
    </div>
  );
};

export default Story;
