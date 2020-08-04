import styled from 'styled-components';
import { Button, TextField } from '@material-ui/core';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const StyledButton = styled(Button)`
  margin: 20px;
`;

export const StyledTextField = styled(TextField)`
  margin: 0px 10px;
`;
