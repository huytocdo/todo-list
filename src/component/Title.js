import React, { Component } from 'react';
import './Title.scss';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Icon from '@material-ui/core/Icon';

export default class Title extends Component {
  render() {
    return (
      <div>
        <Typography variant="display4" gutterBottom>
          Display 4
        </Typography>
        <Button variant="contained" color="primary">
          Hello World
        </Button>
        <Icon>star</Icon>
      </div>
    )
  }
}
