import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';

const useStylesDarkTooltip = makeStyles(() => ({
  tooltip: {
    backgroundColor: 'rgba(0,0,0,0.7)',
    padding: '8px 12px',
    fontSize: '13px',
    borderRadius: '8px',
  },
}));

const CustomButton = ({
  title,
  onClick,
  children,
  color,
  bgColor,
  hoverBgColor,
}) => {
  const useStyles = makeStyles(() => ({
    iconButton: {
      backgroundColor: bgColor && bgColor,
      color: color && color,
      margin: '5px',
      '&:hover': {
        backgroundColor: hoverBgColor && hoverBgColor,
      },
    },
  }));

  const classes = useStyles();
  const tooltipClass = useStylesDarkTooltip();

  return (
    <Tooltip title={title} classes={tooltipClass}>
      <IconButton onClick={onClick} className={classes.iconButton}>
        {children}
      </IconButton>
    </Tooltip>
  );
};

export default CustomButton;
