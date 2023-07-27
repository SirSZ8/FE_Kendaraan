/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Button, Form, InputGroup } from "react-bootstrap";
import { FaSearch } from "react-icons/fa";

const VehicleBrandSearchInlineWidget = ({
  attr,
  isShowIdBrand,
  isShowNameBrand,
  callbackBrandSearchInlineWidget,
  q,
}) => {
  const [query, setQuery] = useState({
    idBrand: "",
    nameBrand: "",
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
        {isShowIdBrand && (
          <Form.Control
            name="idBrand"
            type="text"
            placeholder="Id Brand..."
            value={query.idBrand || ""}
            onChange={handleInput}
          />
        )}
        {isShowNameBrand && (
          <Form.Control
            name="nameBrand"
            type="text"
            placeholder="Nama Brand..."
            value={query.nameBrand || ""}
            onChange={handleInput}
          />
        )}
        <Button
          {...attr}
          onClick={() => callbackBrandSearchInlineWidget(query)}
        >
          <FaSearch /> Search
        </Button>
      </InputGroup>
    </>
  );
};

export default VehicleBrandSearchInlineWidget;
