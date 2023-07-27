/* eslint-disable no-unused-vars */
import { useState } from "react";
import VehicleBrandService from "../../services/VehicleBrandService";
import { useNavigate } from "react-router-dom";
import NavigationWidget from "../../widgets/commons/NavigationWidgets";
import { Button, Card, Form } from "react-bootstrap";
import { FaArrowLeft, FaSave } from "react-icons/fa";

const VehicleBrandAddPage = () => {
  const navigate = useNavigate();
  const [vehicleBrand, setVehicleBrand] = useState({});

  const handleInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    setVehicleBrand((values) => ({ ...values, [name]: value }));
  };

  const handleVehicleBrandServiceCreate = () => {
    VehicleBrandService.create(vehicleBrand).then((respone) => {
      alert("Vehicle brand berhasil ditambahkan");
      navigate("/brand");
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
          <Button onClick={handleVehicleBrandServiceCreate}>
            <FaSave /> Simpan
          </Button>
        </>
      }
    >
      <Card>
        <Card.Header>
          <h5>Tambah Vehicle Brand</h5>
        </Card.Header>
        <Card.Body>
          <Form.Group className="mt-3">
            <Form.Label>ID Brand</Form.Label>
            <Form.Control
              name="idBrand"
              value={vehicleBrand.idBrand || ""}
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Nama Brand</Form.Label>
            <Form.Control
              name="nameBrand"
              value={vehicleBrand.nameBrand || ""}
              onChange={handleInput}
            />
          </Form.Group>
          {/* <Form.Group className="mt-3">
            <Form.Label>Foto Brand</Form.Label>
            <Form.Control
              name="photoBrand"
              value={vehicleBrand.photoBrand || ""}
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group className="mt-3">
            <Form.Label>Created At</Form.Label>
            <Form.Control
              name="created_at"
              value={vehicleBrand.created_at || ""}
              onChange={handleInput}
            />
          </Form.Group>
          <Form.Group className="mt-3">
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

export default VehicleBrandAddPage;
