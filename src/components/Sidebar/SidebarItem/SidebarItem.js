import React from 'react';
import './SidebarItem.scss';
import { Avatar } from '@material-ui/core';

const SidebarItem = ({ src, Icon, title }) => {
  return (
    <div className="sidebar__item">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h4>{title}</h4>
    </div>
  );
};

export default SidebarItem;
