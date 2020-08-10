import React from 'react';
import {useDispatch} from 'react-redux';
import {StyledCurrentLocation, WarningBanner} from './styles';
import {removeLocation} from '../../actions/weather';
import {LocationWeather} from "../../models/state/LocationWeather";
import {IconButton} from "@material-ui/core";
import ClearIcon from "@material-ui/icons/Clear";
import {useTranslation} from "react-i18next";

interface Props {
  locations: LocationWeather[];
}

const RemoveLocationForm = ({ locations } : Props) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const remove = (id: string) => {
    dispatch(removeLocation(id));
  };

  const removeThisLocation = (location: LocationWeather) => {
    remove(location.id);
  };

  return (
      <>
        <WarningBanner>{t('add-location.only-three-locations-supported')}</WarningBanner>
        {
          locations.map((location: LocationWeather) => (
              <StyledCurrentLocation key={location.id}>
                <p>{location.displayName}</p>
                <IconButton onClick={() => { removeThisLocation(location); }}>
                  <ClearIcon color="secondary" />
                </IconButton>
              </StyledCurrentLocation>
          ))
        }
      </>
  );
};

export default RemoveLocationForm;
