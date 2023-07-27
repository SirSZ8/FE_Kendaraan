/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Button, Card, Pagination, Table } from "react-bootstrap";
// import BarangService from "../../services/BarangService";
import NavigationWidget from "../../widgets/commons/NavigationWidgets";
import { FaEdit, FaPlusCircle } from "react-icons/fa";
import Paginator from "../../widgets/commons/Paginator";
// import BarangSearchInlineWidget from "../../widgets/barang/BarangSearchInlineWidget";
import { useNavigate } from "react-router-dom";
import { helperReadableCurrency } from "../../utils/helpers";
import VehicleBrandService from "../../services/VehicleBrandService";
import VehicleBrandSearchInlineWidget from "../../widgets/vehicle_brands/VehicleBrandSearchInlineWidget";

const VehicleBrandListPage = () => {
  const navigate = useNavigate();
  const [daftarBrand, setDaftarBrand] = useState([]);
  const [paginateBrand, setPaginateBrand] = useState({});
  const [queryBrand, setQueryBrand] = useState({ page: 1, limit: 10 });
  //   const [status, setStatus] = useState(false);
  //   const [counter, setCounter] = useState(0);
  useEffect(() => {
    VehicleBrandService.list(queryBrand)
      .then((response) => {
        setDaftarBrand(response.data);
        if (response.headers.pagination) {
          setPaginateBrand(JSON.parse(response.headers.pagination));
        }
      })
      .catch((error) => console.log(error));
  }, [queryBrand]);

  const callbackPaginator = (page) => {
    setQueryBrand((values) => ({ ...values, page }));
  };

  const callbackBrandSearchInlineWidget = (query) => {
    setQueryBrand((values) => ({ ...values, ...query }));
  };

  return (
    <NavigationWidget
      actionTop={
        <VehicleBrandSearchInlineWidget
          attr={{ variant: "secondary" }}
          isShowIdBrand={true}
          isShowNameBrand={true}
          callbackBrandSearchInlineWidget={callbackBrandSearchInlineWidget}
        />
      }
      buttonCreate={
        <Button className="w-100" onClick={() => navigate("/brand/add")}>
          <FaPlusCircle /> Tambah
        </Button>
      }
    >
      <Card>
        <Card.Header className="d-flex justify-content-between align-items-center">
          <h5>Daftar Brand Kendaraan</h5>
          <Paginator
            paginate={paginateBrand}
            callbackPaginator={callbackPaginator}
          />
        </Card.Header>
        <Table responsive>
          <thead>
            <tr>
              <th>ID Brand</th>
              <th>Foto Brand</th>
              <th>Nama Brand</th>
              <th>Dibuat pada</th>
              <th>Dirubah pada</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {daftarBrand.map((vehicle_brands, index) => (
              <tr key={index}>
                <th>{vehicle_brands.idBrand}</th>
                <td>{vehicle_brands.photoBrand}</td>
                <td>{vehicle_brands.nameBrand}</td>
                <td>{vehicle_brands.created_at}</td>
                <td>{vehicle_brands.updated_at}</td>
                <td>
                  <Button
                    onClick={() =>
                      navigate(`/brand/edit/${vehicle_brands.idBrand}`)
                    }
                  >
                    <FaEdit />
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

export default VehicleBrandListPage;
