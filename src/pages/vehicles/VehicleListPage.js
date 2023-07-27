/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Button, Card, Pagination, Table } from "react-bootstrap";
import NavigationWidget from "../../widgets/commons/NavigationWidgets";
import { FaPlusCircle } from "react-icons/fa";
import Paginator from "../../widgets/commons/Paginator";
import { useNavigate } from "react-router-dom";
import { helperReadableCurrency } from "../../utils/helpers";
import VehicleService from "../../services/VehicleService";
import VehicleSearchInlineWidget from "../../widgets/vehicle/VehicleSearchInlineWidget";

const VehicleListPage = () => {
  const navigate = useNavigate();
  const [daftarVehicle, setDaftarVehicle] = useState([]);
  const [paginateVehicle, setPaginateVehicle] = useState({});
  const [queryVehicle, setQueryVehicle] = useState({ page: 1, limit: 10 });
  //   const [status, setStatus] = useState(false);
  //   const [counter, setCounter] = useState(0);
  useEffect(() => {
    VehicleService.list(queryVehicle)
      .then((response) => {
        setDaftarVehicle(response.data);
        if (response.headers.pagination) {
          setPaginateVehicle(JSON.parse(response.headers.pagination));
        }
      })
      .catch((error) => console.log(error));
  }, [queryVehicle]);

  const callbackPaginator = (page) => {
    setQueryVehicle((values) => ({ ...values, page }));
  };

  const callbackVehicleSearchInlineWidget = (query) => {
    setQueryVehicle((values) => ({ ...values, ...query }));
  };

  return (
    <NavigationWidget
      actionTop={
        <VehicleSearchInlineWidget
          attr={{ variant: "secondary" }}
          isShowIdVehicle={true}
          isShowNameVehicle={true}
          callbackVehicleSearchInlineWidget={callbackVehicleSearchInlineWidget}
        />
      }
      buttonCreate={
        <Button className="w-100" onClick={() => navigate("/vehicle/add")}>
          <FaPlusCircle /> Tambah
        </Button>
      }
    >
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <h5>Daftar Kendaraan</h5>
          <Paginator
            paginate={paginateVehicle}
            callbackPaginator={callbackPaginator}
          />
        </Card.Header>
        <Table responsive>
          <thead>
            <tr>
              <th>Id Vehicle</th>
              <th>Nama Kendaraan</th>
              <th>Brands</th>
              <th>Tahun</th>
              <th>Harga</th>
              <th>Dibuat pada</th>
              <th>Dirubah pada</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {daftarVehicle.map((vehicle, orders, index) => (
              <tr key={index}>
                <td>{vehicle.idVehicle}</td>
                <td>{vehicle.nameVehicle}</td>
                <td>{vehicle.vehicle_brand_id}</td>
                <td>{vehicle.year}</td>
                <td>{helperReadableCurrency(vehicle.price)}</td>
                <td>{vehicle.created_at}</td>
                <td>{vehicle.update_at}</td>
                <td>
                  <Button onClick={() => navigate(`/order/${orders.idOrder}`)}>
                    Buy
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card>
    </NavigationWidget>
  );
};

export default VehicleListPage;
