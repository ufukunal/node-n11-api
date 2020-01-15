import { createClientAsync, Client } from "soap";
import { City, Auth, Neighborhood, District } from "interfaces";

export class CityService {
  private serviceUrl: string = "https://api.n11.com/ws/CityService.wsdl";
  private auth: Auth;

  constructor(auth: Auth) {
    this.auth = auth;
  }

  async GetCities(): Promise<City[]> {
    let args = {
      auth: this.auth
    };
    const client: Client = await createClientAsync(this.serviceUrl);
    const response = await client.GetCitiesAsync(args);
    const data: City[] = response[0].cities.city;
    return data;
  }

  async GetCity(cityCode: number): Promise<City> {
    let args = {
      auth: this.auth,
      cityCode: cityCode
    };
    const client: Client = await createClientAsync(this.serviceUrl);
    const response = await client.GetCityAsync(args);
    const data: City = response[0].city;
    return data;
  }

  async GetDistrict(cityCode: number): Promise<District[]> {
    let args = {
      auth: this.auth,
      cityCode: cityCode
    };
    const client: Client = await createClientAsync(this.serviceUrl);
    const response = await client.GetDistrictAsync(args);
    const data: District[] = response[0].districts.district;
    return data;
  }

  async GetNeighborhoods(districtId: number): Promise<Neighborhood[]> {
    let args = {
      auth: this.auth,
      districtId: districtId
    };
    const client: Client = await createClientAsync(this.serviceUrl);
    const response = await client.GetNeighborhoodsAsync(args);
    const data: Neighborhood[] = response[0].neighborhoods.neighborhood;
    return data;
  }
}
