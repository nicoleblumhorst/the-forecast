import { Card, CardContent, Table, TableRow } from '@material-ui/core';
import styled from 'styled-components';
import cyan from '@material-ui/core/colors/cyan';

export const DashboardCard = styled(Card)`
  margin: 10px 20px;
  width: auto;
`;

export const WeatherTileContainer = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const WeatherTile = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px 30px;
  background-color: white;
  border: black 1px solid;
  text-align: center;
  .time {
    font-weight: bolder;
  }
`;

export const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

export const StyledTableRow = styled(TableRow)`
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
`;

export const CollapsableTableRow = styled(TableRow)`
  background-image: linear-gradient(to bottom, #fff, ${cyan[500]});
`;

export const HalfTableStyled = styled(Table)`
  width: 60%;
`;

export const OtherHalfStyled = styled.div`
  width: 35%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  div {
    font-size: 20px;
  }
`;

export const CurrentWeatherCardContent = styled(CardContent)`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
