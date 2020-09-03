import React from 'react';
import CustomButton from '../../util/CustomButton';
import AddIcon from '@material-ui/icons/Add';
import './CreateAStory.scss';

const CreateAStory = ({ userAvatar }) => {
  return (
    <div className="create-a-story">
      <img src={userAvatar} alt="Create a Story" />
      <CustomButton color="#fff" bgColor="#385898">
        <AddIcon />
      </CustomButton>
      <h4>Create a Story</h4>
    </div>
  );
};

export default CreateAStory;
