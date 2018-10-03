import React from 'react';
import {Link} from 'react-router-dom';

export default (props) => (
  <Link to={props.to} style={{ textDecoration: 'none', color: 'inherit' }}>
    {props.children}
  </Link>
)
