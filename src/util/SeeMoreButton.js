import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(() => ({
  button: {
    backgroundColor: '#f0f2f5',
    borderRadius: '50%',
    padding: 3,
    fontSize: 25,
    color: 'gray !important',
  },
}));

const SeeMoreButton = () => {
  const classes = useStyles();

  return <ExpandMoreIcon className={classes.button} />;
};

export default SeeMoreButton;
