export class CurrentWeatherOverview {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  humidity: number;

  constructor(
    temp: number,
    feels_like: number,
    temp_min: number,
    temp_max: number,
    humidity: number
  ) {
    this.temp = temp;
    this.feels_like = feels_like;
    this.temp_min = temp_min;
    this.temp_max = temp_max;
    this.humidity = humidity;
  }
}
