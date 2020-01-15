import { config } from "dotenv";
import { CityService, CategoryService } from "./services";

config();

/*
  https://api.n11.com/ws/CityService.wsdl
  https://api.n11.com/ws/CategoryService.wsdl

  https://api.n11.com/ws/ProductService.wsdl
  https://api.n11.com/ws/ProductSellingService.wsdl
  https://api.n11.com/ws/ProductStockService.wsdl
  https://api.n11.com/ws/OrderService.wsdl
  https://api.n11.com/ws/ShipmentCompanyService.wsdl
  https://api.n11.com/ws/ShipmentService.wsdl
  https://api.n11.com/ws/SettlementService.wsdl
  https://api.n11.com/ws/TicketService.wsdl
*/

(async () => {
  const service = new CategoryService({
    appKey: process.env.APP_KEY as string,
    appSecret: process.env.APP_SECRET as string
  });
  const data = await service.GetParentCategory(1002720);
  console.log(data);
})();
