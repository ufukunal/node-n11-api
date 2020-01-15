export type Result = {
  status: "success" | "failure";
};

export type Auth = {
  appKey: string;
  appSecret: string;
};

export type City = {
  cityCode: string; // Number
  cityId: string; // Number
  cityName: string;
};

export interface CityResult {
  result: Result;

  cities?: {
    city: City[];
  };
}
