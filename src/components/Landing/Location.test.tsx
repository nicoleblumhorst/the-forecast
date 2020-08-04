import React from 'react';
import { shallow } from 'enzyme';
import Location from './Location';
import { CurrentWeatherRS } from '../../models/CurrentWeatherRS';
import { CurrentWeatherOverview } from '../../models/CurrentWeatherOverview';
import { Coordinates } from '../../models/Coordinates';

describe('Location ', () => {
  test("adds 'hot' class when weather is above 80", () => {
    // Given
    const main = new CurrentWeatherOverview(90, 91);
    const locationData = new CurrentWeatherRS(
      'name',
      12345,
      new Coordinates(0, 0),
      [],
      main
    );

    // When
    const testObject = shallow(<Location locationData={locationData} />);

    // Then
    expect(testObject.hasClass('hot')).toBe(true);
  });

  test("adds 'warm' class when weather is between 80 - 65", () => {
    // Given
    const main = new CurrentWeatherOverview(70, undefined);
    const locationData = new CurrentWeatherRS(
      'name',
      12345,
      new Coordinates(0, 0),
      [],
      main
    );

    // When
    const testObject = shallow(<Location locationData={locationData} />);

    // Then
    expect(testObject.hasClass('warm')).toBe(true);
  });

  test("adds 'cool' class when weather is between 65 - 55", () => {
    // Given
    const main = new CurrentWeatherOverview(60, 60);
    const locationData = new CurrentWeatherRS(
      'name',
      12345,
      new Coordinates(0, 0),
      [],
      main
    );

    // When
    const testObject = shallow(<Location locationData={locationData} />);

    // Then
    expect(testObject.hasClass('cool')).toBe(true);
  });

  test("adds 'cold' class when weather is between 55 - 32", () => {
    // Given
    const main = new CurrentWeatherOverview(40, 40);
    const locationData = new CurrentWeatherRS(
      'name',
      12345,
      new Coordinates(0, 0),
      [],
      main
    );

    // When
    const testObject = shallow(<Location locationData={locationData} />);

    // Then
    expect(testObject.hasClass('cold')).toBe(true);
  });

  test("adds 'freezing' class when weather is below 32", () => {
    // Given
    const main = new CurrentWeatherOverview(0, undefined);
    const locationData = new CurrentWeatherRS(
      'name',
      12345,
      new Coordinates(0, 0),
      [],
      main
    );

    // When
    const testObject = shallow(<Location locationData={locationData} />);

    // Then
    expect(testObject.hasClass('freezing')).toBe(true);
  });
});
