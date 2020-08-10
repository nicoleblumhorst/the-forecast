import { GeocodingRS } from '../models/rest/location/GeocodingRS';
import http from "./http";

export class LocationService {
  private BASE_URL = 'http://api.positionstack.com/v1';
  private ACCESS_KEY = 'd5b56c196c928b025a7af522313e4121';

  public getCoordinatesForAddress(location: string): Promise<GeocodingRS> {
    return http(
      `${this.BASE_URL}/forward` +
        `?access_key=${this.ACCESS_KEY}` +
        `&query=${location}`
    ).then((response) => response.data as GeocodingRS);
  }
}
