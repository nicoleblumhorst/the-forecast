import React from 'react';
import { StyledH1, StyledLink } from './styles';

const Header = () => {
  return (
    <header>
      <StyledH1>
        <i className={`wi wi-day-sunny`}></i>{' '}
        <StyledLink to={'/'}>The Forecast</StyledLink>
      </StyledH1>
    </header>
  );
};

export default Header;
