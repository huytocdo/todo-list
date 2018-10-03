import React from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

export default ({id, completed, text}) => {
  return (
    <div className="row">
      <Checkbox 
        icon={<Icon>radio_button_unchecked</Icon>} 
        checkedIcon={<Icon>check_circle_outline</Icon>} 
        classes={{
          root: 'check-box',
          checked: 'checked',
        }}
        value={id}
        checked={completed} 
      />
      <Typography variant="display1" noWrap className={completed ? 'active' : ' '}>
        {text}
      </Typography>
      <IconButton className="delete-button" aria-label="Delete">
        <DeleteIcon />
      </IconButton>
    </div>
  )
}

