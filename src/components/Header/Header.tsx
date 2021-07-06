import { AppBar, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import { HeaderButton } from '..';

import './Header.scss';

export const Header = (props: any) => {
  return (
    <AppBar position="static" color="primary" className="main-header-container">
      <Toolbar>
        <Typography variant="h3" className="logo">
          Public Library
        </Typography>
        <hr className="vertical" />
        <HeaderButton
          url="/books"
          title="Available Books"
          startIcon={<img src="/icons/book.svg" alt="Books" />}
        />
        <HeaderButton
          url="/borrow"
          title="Borrow"
          startIcon={<img src="/icons/employees.svg" alt="Borrow" />}
        />
        <HeaderButton
          url="/about"
          title="About"
          startIcon={<img src="/icons/building.svg" alt="About" />}
        />
        <HeaderButton
          url="/register"
          title="Register"
          startIcon={<img src="/icons/employees.svg" alt="Register" />}
        />
      </Toolbar>
    </AppBar>
  );
};
