import React from "react";
import "./Header.scss";
// import Avatar from "./Avatar";

// MUI
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";

// MUI Icons
import SearchIcon from "@material-ui/icons/Search";
import HomeIcon from "@material-ui/icons/Home";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import GroupIcon from "@material-ui/icons/Group";
import GroupOutlinedIcon from "@material-ui/icons/GroupOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import AccountCircleOutlinedIcon from "@material-ui/icons/AccountCircleOutlined";
import OndemandVideoIcon from "@material-ui/icons/OndemandVideo";
import OndemandVideoOutlinedIcon from "@material-ui/icons/OndemandVideoOutlined";

import AddIcon from "@material-ui/icons/Add";
import MessageIcon from "@material-ui/icons/Message";
import NotificationsIcon from "@material-ui/icons/Notifications";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const Header = () => {
    return (
        <div className='header'>
            <div className='header__left'>
                <img
                    src='https://cdn.freelogovectors.net/wp-content/uploads/2020/03/facebook-logo-new-2019.png'
                    alt='facebook logo'
                />

                <div className='header__search'>
                    <SearchIcon />
                    <input type='text' placeholder='Search Facebook' />
                </div>
            </div>
            <div className='header__center'>
                <div className='header__option'>
                    <Tooltip title='Home'>
                        <HomeOutlinedIcon fontSize='large' />
                    </Tooltip>
                </div>
                <div className='header__option'>
                    <AccountCircleOutlinedIcon fontSize='large' />
                </div>
                <div className='header__option'>
                    <GroupOutlinedIcon fontSize='large' />
                </div>
                <div className='header__option'>
                    <OndemandVideoOutlinedIcon fontSize='large' />
                </div>
            </div>
            <div className='header__right'>
                <div className='header__info'>
                    <Avatar />
                    <h4>Tu</h4>
                </div>

                <IconButton>
                    <AddIcon />
                </IconButton>

                <IconButton>
                    <MessageIcon />
                </IconButton>

                <IconButton>
                    <NotificationsIcon />
                </IconButton>

                <IconButton>
                    <ArrowDropDownIcon />
                </IconButton>
            </div>
        </div>
    );
};

export default Header;
