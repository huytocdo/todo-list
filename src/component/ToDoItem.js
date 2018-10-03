import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';

export default ({id, completed, text, removeHandler, changeStatusHandler}) => {
  return (
    <div className="row">
      <Checkbox 
        icon={<Icon>radio_button_unchecked</Icon>} 
        checkedIcon={<Icon>check_circle_outline</Icon>} 
        classes={{
          root: 'check-box',
          checked: 'checked',
        }}
        checked={completed} 
        onChange={changeStatusHandler}
      />
      <Typography variant="display1" noWrap className={completed ? 'active' : ' '}>
        {text}
      </Typography>
      <IconButton className="delete-button" aria-label="Delete" onClick={removeHandler}>
        <DeleteIcon />
      </IconButton>
    </div>
  )
}

