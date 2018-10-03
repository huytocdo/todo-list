import React from 'react';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';


export default ({ label,helper, elementType, inputType, valid, touched, changed, value }) => (
  <FormControl margin="normal" fullWidth>
    <InputLabel htmlFor={elementType}>{label}</InputLabel>
    <Input 
      id={elementType} 
      name={elementType} 
      type={inputType} 
      error={!valid && touched} 
      onChange={(event) => changed(event.target.value)} 
      value={value} />
    { helper 
      ? <FormHelperText>{helper}</FormHelperText>
      : null }
  </FormControl>
)
