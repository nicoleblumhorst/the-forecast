import React from 'react';
import Moment from 'react-moment';
import { TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import Temperature from '../../shared/Temperature';
import Percentage from '../../shared/Percentage';
import { DailyForcast } from '../../../models/rest/weather/DailyForcast';
import { HalfTableStyled, OtherHalfStyled } from '../styles';
import { FlexDiv } from '../../Landing/styles';
import {useTranslation} from "react-i18next";

type Props = {
  data: DailyForcast;
};

function CollapsedRow({ data }: Props) {
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <h4>{t('location-details.details')}</h4>
      <FlexDiv>
        <HalfTableStyled>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>{t('location-details.morning')}</TableCell>
              <TableCell>{t('location-details.day')}</TableCell>
              <TableCell>{t('location-details.evening')}</TableCell>
              <TableCell>{t('location-details.night')}</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>{t('location-details.actual')}</TableCell>
              <TableCell>
                <Temperature temp={data.temp.morn} />
              </TableCell>
              <TableCell>
                <Temperature temp={data.temp.day} />
              </TableCell>
              <TableCell>
                <Temperature temp={data.temp.eve} />
              </TableCell>
              <TableCell>
                <Temperature temp={data.temp.night} />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>{t('common.feels-like')}</TableCell>
              <TableCell>
                <Temperature temp={data.feels_like.morn} />
              </TableCell>
              <TableCell>
                <Temperature temp={data.feels_like.day} />
              </TableCell>
              <TableCell>
                <Temperature temp={data.feels_like.eve} />
              </TableCell>
              <TableCell>
                <Temperature temp={data.feels_like.night} />
              </TableCell>
            </TableRow>
          </TableBody>
        </HalfTableStyled>
        <OtherHalfStyled>
          <div>
            <i className={`wi wi-sunrise`} />
            &nbsp;
            <Moment date={new Date(data.sunrise * 1000)} format="h:mmA" />
          </div>
          <div>
            <i className={`wi wi-sunset`} />
            &nbsp;
            <Moment date={new Date(data.sunset * 1000)} format="h:mmA" />
          </div>
        </OtherHalfStyled>
      </FlexDiv>
    </React.Fragment>
  );
}

export default CollapsedRow;
