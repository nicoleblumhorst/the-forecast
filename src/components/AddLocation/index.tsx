import React from 'react';
import { useForm } from 'react-hook-form';
import { StyledButton, StyledForm, StyledTextField } from './styles';
import { TextField } from '@material-ui/core';

const AddLocation = () => {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data: any) => console.log(data);

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <TextField
        name="location-name"
        label="Location Name"
        type="text"
        defaultValue="London"
        variant="outlined"
        size="small"
        inputRef={register}
      ></TextField>
      <p>OR</p>
      <div>
        <StyledTextField
          name="latitude"
          label="Latitude"
          type="number"
          defaultValue="38"
          variant="outlined"
          size="small"
          inputRef={register({ min: -90, max: 90 })}
        ></StyledTextField>
        <StyledTextField
          name="longitude"
          label="Longitude"
          type="number"
          defaultValue="-90"
          variant="outlined"
          size="small"
          inputRef={register({ min: -180, max: 180 })}
        ></StyledTextField>
      </div>
      <StyledButton
        type="submit"
        variant="contained"
        color="secondary"
        disableElevation
      >
        Add Location
      </StyledButton>
    </StyledForm>
  );
};

export default AddLocation;
