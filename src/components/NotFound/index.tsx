import React from 'react';
import ErrorOutline from '@material-ui/icons/ErrorOutline';
import { NotFoundStyle } from './styles';

const NotFound = () => {
  return (
    <NotFoundStyle>
      <ErrorOutline fontSize="large" color="disabled"></ErrorOutline>
      <h2>Page Not Found</h2>
      <p>No idea what you were looking for, but it ain't here</p>
    </NotFoundStyle>
  );
};

export default NotFound;
