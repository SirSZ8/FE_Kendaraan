import config from "../config";
import AuthService from "./AuthService";
import HTTPService from "./HTTPService";

const VehicleBrandService = {};
const CONFIG_HTTP = {
  headers: {
    "x-access-token": AuthService.getToken(),
  },
};

const configure = (query) => {
  return {
    headers: {
      "x-access-token": AuthService.getToken(),
    },
    params: query,
  };
};

VehicleBrandService.list = (query) => {
  CONFIG_HTTP.params = query;
  return HTTPService.get(`${config.BASE_URL}/brand`, configure(query));
};

VehicleBrandService.create = (vehicle_brands) => {
  CONFIG_HTTP.params = null;
  return HTTPService.post(
    `${config.BASE_URL}/brand`,
    vehicle_brands,
    CONFIG_HTTP
  );
};

VehicleBrandService.get = (idBrand) => {
  CONFIG_HTTP.params = null;
  return HTTPService.get(`${config.BASE_URL}/brand/${idBrand}`, CONFIG_HTTP);
};

VehicleBrandService.edit = (idBrand, vehicle_brands) => {
  CONFIG_HTTP.params = null;
  return HTTPService.put(
    `${config.BASE_URL}/brand/${idBrand}`,
    vehicle_brands,
    CONFIG_HTTP
  );
};

VehicleBrandService.delete = (idBrand) => {
  CONFIG_HTTP.params = null;
  return HTTPService.delete(`${config.BASE_URL}/brand/${idBrand}`, CONFIG_HTTP);
};

export default VehicleBrandService;
