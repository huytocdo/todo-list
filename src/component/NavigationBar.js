import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import Link from './../component/UI/Link';

export default () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="title" color="inherit" className="flex-grow">
          Todos
        </Typography>
        <div className="account-box">
          <Avatar className="avatar">
            <AccountCircle />
          </Avatar>
          <Typography variant="subheading" color="inherit">
            ndhuyspkt@gmail.com
          </Typography>
          <Button color="inherit">Save My List</Button>
          <Link to="/logout">
            <Button color="inherit">Logout</Button>
          </Link>
          
        </div>
      </Toolbar>
    </AppBar>
  )
}