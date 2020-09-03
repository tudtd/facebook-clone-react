import React from 'react';
import './Sidebar.scss';
import SeeMoreButton from '../../util/SeeMoreButton';

// MUI Icons
import SidebarItem from './SidebarItem/SidebarItem';
import PeopleIcon from '@material-ui/icons/People';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import StorefrontIcon from '@material-ui/icons/Storefront';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__list">
        <SidebarItem
          src="https://scontent.fsgn2-3.fna.fbcdn.net/v/t1.0-9/36441674_2087936414791185_3335645930501177344_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=JSwi-d2s9XgAX8u499_&_nc_ht=scontent.fsgn2-3.fna&oh=eda8d999d1e44ab097c284c3768f4363&oe=5F723AEE"
          title="Tu Dinh"
        />
        <SidebarItem Icon={PeopleIcon} title="Friends" />
        <SidebarItem Icon={GroupWorkIcon} title="Groups" />
        <SidebarItem Icon={StorefrontIcon} title="Marketplace" />
        <SidebarItem Icon={OndemandVideoIcon} title="Videos" />
        <SidebarItem Icon={SeeMoreButton} title="See More" />

        <div className="separator" />
      </div>
      <div className="sidebar__list">{/* SidebarItem */}</div>
    </div>
  );
};

export default Sidebar;
