import React from 'react';
import { Button } from '@material-ui/core';
import { Link, useHistory } from 'react-router-dom';

import './HeaderButton.scss';

export const HeaderButton = (props: any) => {
  return (
    <Link to={props.url}>
      <Button
        className="header-button"
        variant="text"
        color="secondary"
        size="large"
        startIcon={props.startIcon ? props.startIcon : ''}
        disableRipple
        disableTouchRipple
      >
        {props.title}
      </Button>
    </Link>
  );
};
