/* eslint-disable no-unused-vars */
import { useState } from "react";
// import VehicleBrandService from "../../services/VehicleBrandService";
import { useNavigate } from "react-router-dom";
import NavigationWidget from "../../widgets/commons/NavigationWidgets";
import { Button, Card, Form } from "react-bootstrap";
import { FaArrowLeft, FaSave } from "react-icons/fa";
import VehicleService from "../../services/VehicleService";

const VehicleAddPage = () => {
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState({});

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setVehicle((values) => ({ ...values, [name]: value }));
  };

  const handleVehicleServiceCreate = () => {
    VehicleService.create(vehicle).then((respone) => {
      alert("Vehicle berhasil ditambahkan");
      navigate("/vehicle");
    });
  };

  return (
    <NavigationWidget
      actionTop={
        <>
          <Button
            className="me-2"
            variant="secondary"
            onClick={() => navigate(-1)}
          >
            <FaArrowLeft /> Kembali
          </Button>
          <Button onClick={handleVehicleServiceCreate}>
            <FaSave /> Simpan
          </Button>
        </>
      }
    >
      <Card>
        <Card.Header>
          <h5>Tambah Vehicle </h5>
        </Card.Header>
        <Card.Body>
          <Form.Group className="mt-3">
            <Form.Label>ID Vehicle</Form.Label>
            <Form.Control
              name="idVehicle"
              value={vehicle.idVehicle || ""}
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Nama Vehicle</Form.Label>
            <Form.Control
              name="nameVehicle"
              value={vehicle.nameVehicle || ""}
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Harga Kendaraan</Form.Label>
            <Form.Control
              name="price"
              value={vehicle.price || ""}
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Tahun Kendaraan</Form.Label>
            <Form.Control
              name="year"
              value={vehicle.year || ""}
              onChange={handleInput}
            />
          </Form.Group>
          {/* <Form.Group className="mt-3">
            <Form.Label>Updated At</Form.Label>
            <Form.Control
              name="updated_at"
              value={vehicleBrand.updated_at || ""}
              onChange={handleInput}
            />
          </Form.Group> */}
        </Card.Body>
      </Card>
    </NavigationWidget>
  );
};

export default VehicleAddPage;
