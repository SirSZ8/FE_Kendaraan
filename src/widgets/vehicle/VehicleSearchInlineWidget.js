/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const VehicleSearchInlineWidget = ({
  attr,
  isShowIdVehicle,
  isShowNameVehicle,
  callbackVehicleSearchInlineWidget,
  q,
}) => {
  const [query, setQuery] = useState({
    idVehicle: "",
    nameVehicle: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setQuery((values) => ({ ...values, [name]: value }));
  };

  useEffect(() => {
    if (q) {
      setQuery((values) => ({ ...values, ...q }));
    }
  }, [q]);

  return (
    <>
      <InputGroup>
        {isShowIdVehicle && (
          <Form.Control
            name="idVehicle"
            type="text"
            placeholder="id vehicle..."
            value={query.idVehicle || ""}
            onChange={handleInput}
          />
        )}
        {isShowNameVehicle && (
          <Form.Control
            name="nameVehicle"
            type="text"
            placeholder="Nama Kendaraan..."
            value={query.nameVehicle || ""}
            onChange={handleInput}
          />
        )}
        <Button
          {...attr}
          onClick={() => callbackVehicleSearchInlineWidget(query)}
        >
          <FaSearch /> Search
        </Button>
      </InputGroup>
    </>
  );
};

export default VehicleSearchInlineWidget;
