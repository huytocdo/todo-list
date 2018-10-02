import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
export default () => {
  return (
    <div className="list-item">
      <Checkbox 
        icon={<Icon>radio_button_unchecked</Icon>} 
        checkedIcon={<Icon>check_circle_outline</Icon>} 
        classes={{
          root: 'check-box',
          checked: 'checked',
        }}
        value="checkedH" 
      />
      <Typography variant="display1" noWrap className="active">
        To Do List To Do List To Do List To Do List To Do List To Do List 
      </Typography>
      <IconButton className="delete-button" aria-label="Delete">
        <DeleteIcon />
      </IconButton>
    </div>
  )
}

