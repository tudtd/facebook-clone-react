import React from 'react';
import './Header.scss';
import CustomButton from '../../util/CustomButton';

// MUI
import Avatar from '@material-ui/core/Avatar';
import Tooltip from '@material-ui/core/Tooltip';
import { makeStyles } from '@material-ui/core/styles';

// MUI Icons
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import HomeOutlinedIcon from '@material-ui/icons/HomeOutlined';
import PeopleIcon from '@material-ui/icons/People';
import PeopleOutlinedIcon from '@material-ui/icons/PeopleOutlined';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import OndemandVideoIcon from '@material-ui/icons/OndemandVideo';
import OndemandVideoOutlinedIcon from '@material-ui/icons/OndemandVideoOutlined';

import AddIcon from '@material-ui/icons/Add';
import MessageIcon from '@material-ui/icons/Message';
import NotificationsIcon from '@material-ui/icons/Notifications';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

const useStyles = makeStyles(() => ({
  avatar: {
    width: 30,
    height: 30,
  },
}));

const useStylesDarkTooltip = makeStyles(() => ({
  tooltip: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: '8px 12px',
    fontSize: '13px',
    borderRadius: '8px',
    marginTop: '20px',
  },
}));

const Header = () => {
  const classes = useStyles();
  const tooltipClass = useStylesDarkTooltip();

  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://cdn.freelogovectors.net/wp-content/uploads/2020/03/facebook-logo-new-2019.png"
          alt="facebook logo"
        />

        <div className="header__search">
          <SearchIcon />
          <input type="text" placeholder="Search Facebook" />
        </div>
      </div>
      <div className="header__center">
        <div className="header__options header__options--active">
          <Tooltip title="Home" classes={tooltipClass}>
            <HomeOutlinedIcon fontSize="large" />
          </Tooltip>
        </div>
        <div className="header__options">
          <Tooltip title="Friends" classes={tooltipClass}>
            <PeopleOutlinedIcon fontSize="large" />
          </Tooltip>
        </div>
        <div className="header__options">
          <Tooltip title="Profile" classes={tooltipClass}>
            <AccountCircleOutlinedIcon fontSize="large" />
          </Tooltip>
        </div>
        <div className="header__options">
          <Tooltip title="Watch" classes={tooltipClass}>
            <OndemandVideoOutlinedIcon fontSize="large" />
          </Tooltip>
        </div>
      </div>
      <div className="header__right">
        <div className="header__info">
          <Avatar className={classes.avatar} />
          <h4>Tu</h4>
        </div>

        <CustomButton
          title="Create"
          color="rgba(0,0,0,0.9)"
          bgColor="rgb(228, 230, 235)"
          hoverBgColor="rgb(209, 209, 209)"
        >
          <AddIcon fontSize="small" />
        </CustomButton>

        <CustomButton
          title="Messenger"
          color="rgba(0,0,0,0.9)"
          bgColor="rgb(228, 230, 235)"
          hoverBgColor="rgb(209, 209, 209)"
        >
          <MessageIcon fontSize="small" />
        </CustomButton>

        <CustomButton
          title="Notifications"
          color="rgba(0,0,0,0.9)"
          bgColor="rgb(228, 230, 235)"
          hoverBgColor="rgb(209, 209, 209)"
        >
          <NotificationsIcon fontSize="small" />
        </CustomButton>

        <CustomButton
          title="Account"
          color="rgba(0,0,0,0.9)"
          bgColor="rgb(228, 230, 235)"
          hoverBgColor="rgb(209, 209, 209)"
        >
          <ArrowDropDownIcon fontSize="small" />
        </CustomButton>
      </div>
    </div>
  );
};

export default Header;
