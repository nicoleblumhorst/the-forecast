import styled from 'styled-components';
import { Card, CardContent } from '@material-ui/core';

// font-family: league-gothic, sans-serif;
// font-weight: 400;
// font-style: normal;

export const StyledCard = styled(Card)`
  color: black;
  width: 30%;
  text-align: center;

  @media (max-width: 700px) {
    width: 40%;
    margin-bottom: 20px;
  }
  @media (max-width: 400px) {
    width: 90%;
    margin-bottom: 20px;
  }
`;

export const Divider = styled.div`
  margin: 20px 0px;
  border-width: 1px;
  border-style: solid;
`;

export const StyledCardContent = styled(CardContent)`
  padding: 10px;

  h3 {
    font-size: 30px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  h4 {
    text-transform: uppercase;
    color: gray;
    font-size: 20px;
  }
  i {
    margin-bottom: 10px;
  }
  p,
  h3,
  h4 {
    margin: 0;
  }
`;

export const FlexDiv = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
`;

export const GridDiv = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  grid-template-rows: auto;
  grid-template-areas:
    'temp high'
    'temp low'
    'feels-like humidity';

  p {
    font-size: 16px;
  }
  .temp {
    font-size: 40px;
    grid-area: temp;
  }
  .feels-like {
    grid-area: feels-like;
  }
  .high {
    grid-area: high;
  }
  .low {
    grid-area: low;
  }
  .humidity {
    grid-area: humidity;
  }
`;
