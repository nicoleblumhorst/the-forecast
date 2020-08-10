import React from 'react';
import ErrorOutline from '@material-ui/icons/ErrorOutline';
import { NotFoundStyle } from './styles';
import {useTranslation} from "react-i18next";

const NotFound = () => {
  const { t } = useTranslation();

  return (
    <NotFoundStyle>
      <ErrorOutline fontSize="large" color="disabled"></ErrorOutline>
      <h2>{t('not-found.page-not-found')}</h2>
      <p>{t('not-found.page-not-found-detail')}</p>
    </NotFoundStyle>
  );
};

export default NotFound;
