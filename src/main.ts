import { config } from "dotenv";
import { createClientAsync, Client } from "soap";
import { Result, Auth } from "interfaces";

config();

class CategoryService {
  private serviceUrl: string = "https://api.n11.com/ws/CityService.wsdl";
  private auth: Auth;

  constructor(auth: Auth) {
    // super();
    this.auth = auth;
  }

  async GetCities() {
    let args = {
      auth: this.auth
    };

    const client: Client = await createClientAsync(this.serviceUrl);
    const data: Result = await client.GetCitiesAsync(args)[0];
    return data;
  }

  /*
  GetCity() {
    let args = {
      auth: {
        appKey: this.appKey,
        appSecret: this.appSecret
      },
      cityCode: "05"
    };

    createClient(this.serviceUrl, (err: any, client: any) =>
      client.GetCity(args, (err: any, result: any) => console.log(result))
    );
  }
  */
}

(async () => {
  const service = new CategoryService({
    appKey: process.env.APP_KEY,
    appSecret: process.env.APP_SECRET
  });
  const cities = await service.GetCities();
  console.log(cities);
})();
/*
  https://api.n11.com/ws/CategoryService.wsdl
  https://api.n11.com/ws/CityService.wsdl
  https://api.n11.com/ws/ProductService.wsdl
  https://api.n11.com/ws/ProductSellingService.wsdl
  https://api.n11.com/ws/ProductStockService.wsdl
  https://api.n11.com/ws/OrderService.wsdl
  https://api.n11.com/ws/ShipmentCompanyService.wsdl
  https://api.n11.com/ws/ShipmentService.wsdl
  https://api.n11.com/ws/SettlementService.wsdl
  https://api.n11.com/ws/TicketService.wsdl
*/
