import React from 'react';
import Typography from '@material-ui/core/Typography';
import CssBaseline from '@material-ui/core/CssBaseline';
import Paper from '@material-ui/core/Paper';

export default (props) => {
  return (
    <div className="auth-layout">
      <Typography variant="display3">
        To Do List
      </Typography>
      <main>
        <CssBaseline />
        <Paper className="auth-box">
          {props.children}
        </Paper>
      </main>
    </div>
  )
}

