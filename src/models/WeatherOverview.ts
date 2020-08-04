export class WeatherOverview {
  id: number;
  main: string;
  description: string;

  constructor(id: number, main: string, description: string) {
    this.id = id;
    this.main = main;
    this.description = description;
  }
}
