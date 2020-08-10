import React from 'react';
import { useTranslation } from 'react-i18next';
import { StyledH1, StyledLink } from './styles';


const Header = () => {
  const { t } = useTranslation();

  return (
    <header>
      <StyledH1>
        <i className={`wi wi-day-sunny`}></i>{' '}
        <StyledLink to={'/'}>{t('title')}</StyledLink>
      </StyledH1>
    </header>
  );
};

export default Header;
