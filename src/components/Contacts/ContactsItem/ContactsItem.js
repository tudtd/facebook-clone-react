import React from 'react';
import './ContactsItem.scss';
import Avatar from '@material-ui/core/Avatar';

const ContactsItem = ({ userAvatarSrc, userName }) => {
  return (
    <div className="contacts-item">
      <Avatar />
      <span>{userName}</span>
    </div>
  );
};

export default ContactsItem;
