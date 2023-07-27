import config from "../config";
import AuthService from "./AuthService";
import HTTPService from "./HTTPService";

const VehicleService = {};
const CONFIG_HTTP = {
  headers: {
    "x-access-token": AuthService.getToken(),
  },
};

VehicleService.list = (query) => {
  CONFIG_HTTP.params = query;
  return HTTPService.get(`${config.BASE_URL}/vehicle`, CONFIG_HTTP);
};

VehicleService.create = (vehicle) => {
  CONFIG_HTTP.params = null;
  return HTTPService.post(`${config.BASE_URL}/vehicle`, vehicle, CONFIG_HTTP);
};

VehicleService.get = (idVehicle) => {
  CONFIG_HTTP.params = null;
  return HTTPService.get(
    `${config.BASE_URL}/vehicle/${idVehicle}`,
    CONFIG_HTTP
  );
};

VehicleService.edit = (idVehicle, vehicle) => {
  CONFIG_HTTP.params = null;
  return HTTPService.put(
    `${config.BASE_URL}/vehicle/${idVehicle}`,
    vehicle,
    CONFIG_HTTP
  );
};

VehicleService.delete = (idVehicle) => {
  CONFIG_HTTP.params = null;
  return HTTPService.delete(
    `${config.BASE_URL}/vehicle/${idVehicle}`,
    CONFIG_HTTP
  );
};

export default VehicleService;
