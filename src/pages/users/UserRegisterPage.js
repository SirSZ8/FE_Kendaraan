import { useState } from "react";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
// import AuthService from "../../services/AuthService";
import RegisterService from "../../services/RegisterService";

const UserRegisterPage = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    idUser: "",
    fullname: "",
    email: "",
    password: "",
  });

  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser((values) => ({ ...values, [name]: value }));
  };

  const handleRegisterService = () => {
    RegisterService.register(user)
      .then((response) => {
        RegisterService.saveToken(response.data.token);
        navigate("/");
      })
      .catch((error) => alert(error));
  };

  return (
    <>
      <Container>
        <Row className="vh-100 d-flex justify-content-center align-items-center">
          <Col md={4}>
            <Card>
              <Card.Img
                variant="top"
                src="https://picsum.photos/900/400?random=1"
              />
              <Card.Body>
                <Form.Group className="my-3">
                  <Form.Label>Id User</Form.Label>
                  <Form.Control
                    name="idUser"
                    onChange={handleInput}
                    value={user.idUser || ""}
                    type="text"
                    placeholder="Masukan id user..."
                  />
                </Form.Group>
                <Form.Group className="my-3">
                  <Form.Label>Fullname</Form.Label>
                  <Form.Control
                    name="fullname"
                    onChange={handleInput}
                    value={user.fullname || ""}
                    type="text"
                    placeholder="Masukan nama lengkap..."
                  />
                </Form.Group>
                <Form.Group className="my-3">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control
                    name="email"
                    onChange={handleInput}
                    value={user.email || ""}
                    type="email"
                    placeholder="Masukan email..."
                  />
                </Form.Group>
                <Form.Group className="my-3">
                  <Form.Label>Passwod</Form.Label>
                  <Form.Control
                    name="password"
                    onChange={handleInput}
                    value={user.password || ""}
                    type="password"
                    placeholder="Masukan password..."
                  />
                </Form.Group>

                <div className="d-grid gap-2">
                  <Button onClick={handleRegisterService}>Register</Button>
                </div>
                <p className="flex justify-content-center align-items-center mt-3">
                  Already have an account?
                  <Link to="/">Login here</Link>
                </p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default UserRegisterPage;
