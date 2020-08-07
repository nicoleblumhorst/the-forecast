import React from 'react';
import Moment from 'react-moment';
import { TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import Temperature from '../../shared/Temperature';
import Percentage from '../../shared/Percentage';
import { DailyForcast } from '../../../models/rest/weather/DailyForcast';
import { HalfTableStyled, OtherHalfStyled } from '../styles';
import { FlexDiv } from '../../Landing/styles';

type Props = {
  data: DailyForcast;
};

function CollapsedRow({ data }: Props) {
  return (
    <React.Fragment>
      <h4>Details</h4>
      <FlexDiv>
        <HalfTableStyled>
          <TableHead>
            <TableRow>
              <TableCell></TableCell>
              <TableCell>Morning</TableCell>
              <TableCell>Day</TableCell>
              <TableCell>Evening</TableCell>
              <TableCell>Night</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Actual</TableCell>
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
              <TableCell>Feels Like</TableCell>
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
            <i className={`wi wi-humidity`} />
            &nbsp;
            <Percentage percentage={data.humidity} />
          </div>
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
