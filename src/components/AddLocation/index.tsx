import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useForm } from 'react-hook-form';
import { RouteComponentProps, withRouter } from 'react-router';
import { CircularProgress, TableBody } from '@material-ui/core';
import {
  StyledButton,
  StyledForm,
  StyledTextField,
  ResultsContainer,
  CircularProgressContainer,
  StyledTable,
} from './styles';
import { LocationService } from '../../ultilities/LocationService';
import { addLocation } from '../../actions/weather';
import { GeocodingRS } from '../../models/rest/location/GeocodingRS';
import { Location } from '../../models/rest/location/Location';
import ResultTableRow from './ResultTableRow';

const AddLocation = ({ history }: RouteComponentProps) => {
  const { register, handleSubmit } = useForm();
  const dispatch = useDispatch();
  const locationService = new LocationService();
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState<GeocodingRS>();

  const add = (lat: number, lon: number, name: string) => {
    dispatch(addLocation(lat, lon, name));
    history.push('/');
  };

  const onSubmit = (data: any) => {
    setIsLoading(true);
    locationService.getCoordinatesForAddress(data.location).then((results) => {
      setIsLoading(false);
      setResults(results);
      if (results.data.length === 1) {
        add(
          results.data[0].latitude,
          results.data[0].longitude,
          results.data[0].label
        );
      }
    });
  };

  const onSelect = (location: Location) => {
    add(location.latitude, location.longitude, location.label);
  };

  return (
    <>
      <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <StyledTextField
          name="location"
          label="Location"
          type="text"
          placeholder="try London or 123 Main Street, New York City"
          variant="outlined"
          size="medium"
          inputRef={register}
        ></StyledTextField>
        <StyledButton
          type="submit"
          variant="contained"
          color="primary"
          disableElevation
        >
          Search
        </StyledButton>
      </StyledForm>
      <CircularProgressContainer className={isLoading ? '' : 'gone'}>
        <CircularProgress />
      </CircularProgressContainer>
      <ResultsContainer className={results ? '' : 'gone'}>
        <h3>
          We found a few locations that matched your search. Let us know which
          one you would like to see the weather for.
        </h3>
        <StyledTable>
          <TableBody>
            {results?.data?.map((location: Location, index: number) => (
              <ResultTableRow
                key={index.toString()}
                location={location}
                onSelect={onSelect}
              />
            ))}
          </TableBody>
        </StyledTable>
      </ResultsContainer>
    </>
  );
};

export default withRouter(AddLocation);
