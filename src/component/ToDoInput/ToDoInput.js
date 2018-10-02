import React from 'react'
import './ToDoInput.scss';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/IconButton';

const styles = theme => ({
  root: {
    ...theme.typography.display1,
  }
})
const ToDoInput = (props) => {
  
  return (
    <div className="list-item">
      <Checkbox 
        icon={<Icon>keyboard_arrow_down</Icon>} 
        checkedIcon={<Icon>keyboard_arrow_up</Icon>} 
        classes={{
          root: 'check-box',
          checked: 'checked',
        }}
        value="checkedH" 
      />
      <input className={[props.classes.root, 'to-do-input'].join(' ')} />
      <IconButton className="add-button">
        <Icon>add</Icon>
      </IconButton>
    </div>
  )
}

export default withStyles(styles)(ToDoInput);
