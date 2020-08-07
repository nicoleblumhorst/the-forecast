export class SystemInfo {
  country: string;
  sunrise: number;
  sunset: number;

  constructor(country: string, sunrise: number, sunset: number) {
    this.country = country;
    this.sunrise = sunrise;
    this.sunset = sunset;
  }
}
