import React from 'react';
import Typography from '@material-ui/core/Typography';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';
import './Filter.scss';

export default () => {
  return (
    <div className="list-item list-item-bottom">
      <Typography variant="body1" color="inherit">10 item left</Typography>
      <ToggleButtonGroup value="left" exclusive>
        <ToggleButton value="left" classes={{root: 'font-size-1'}}>
          All
        </ToggleButton>
        <ToggleButton value="center" classes={{root: 'font-size-1'}}>
          Active
        </ToggleButton>
        <ToggleButton value="right" classes={{root: 'font-size-1'}}>
          Completed
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  )
}
