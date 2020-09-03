import React from 'react';
import ContactsItem from './ContactsItem/ContactsItem';
import CustomButton from '../../util/CustomButton';
import './Contacts.scss';

// MUI Icons
import VideoCallIcon from '@material-ui/icons/VideoCall';
import SearchIcon from '@material-ui/icons/Search';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

const Contacts = () => {
  return (
    <div className="contacts">
      <div className="contacts__header">
        <h2>Contacts</h2>
        <div className="contacts__options">
          <CustomButton title="New Room">
            <VideoCallIcon />
          </CustomButton>

          <CustomButton title="Search by name or group">
            <SearchIcon />
          </CustomButton>

          <CustomButton title="Options">
            <MoreHorizIcon />
          </CustomButton>
        </div>
      </div>
      <div className="contacts__list">
        <ContactsItem userName="Tuyết Phương" />
        <ContactsItem userName="Mai Thanh Quý" />
        <ContactsItem userName="Trần Minh Tú" />
      </div>
    </div>
  );
};

export default Contacts;
