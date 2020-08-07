import styled from 'styled-components';
import { Button, CircularProgress, Table, TextField } from '@material-ui/core';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled(Button)`
  margin: 20px;
`;

export const StyledTextField = styled(TextField)`
  min-width: 400px;
`;

export const CircularProgressContainer = styled.div`
  margin: 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  &.gone {
    display: none;
  }
`;

export const ResultsContainer = styled.div`
  text-align: center;
  &.gone {
    display: none;
  }
`;

export const StyledTable = styled(Table)`
  width: auto;
  margin: 0px auto;
`;
