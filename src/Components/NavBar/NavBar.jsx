
import { React } from 'react';
import { Button, Container, Form, Nav, Navbar, NavDropdown, Offcanvas,Image } from "react-bootstrap"
import { useNavigate } from 'react-router-dom'
import { NavLink as Navigator } from 'react-router-dom'
import Logo from "./Imagens/DonaMaria.jpg"
import "./CSS/styles.css"






const NavBar = () => {


    const navigateFem = useNavigate("/feminina");
    const navigateMasc = useNavigate("/");
    const navigatePerfil = useNavigate("/perfil");
    
    return(
        <Navbar key="lg" bg="light" expand="lg" className="body-nav">
            <Container fluid>
              <Navbar.Brand href="."><Image id="Logo-img" src={Logo} /></Navbar.Brand>
              <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-lg`}
                aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
                    Offcanvas
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <Nav id="Seção" className="justify-content-center mx-auto ">
                    <Button id="btn_masc" className="mx-4" variant="outline-danger" onClick={() => navigateMasc("/")}    active>Bolos</Button>
                    <Button id="btn_fem" className="mx-4" variant="outline-danger" onClick={() => navigateFem("/kit-presente")}  >Kit Presente</Button>
                  </Nav>
                  <Nav className="justify-content-end mx-auto">
                    <Nav.Link href="#">Carrinho</Nav.Link>
                  </Nav>
                  <Nav className="justify-content-end mx-auto">
                    <Nav.Link to="/trabalhe-conosco" as={Navigator}>Trabalhe Conosco</Nav.Link>
                  </Nav>
                  <NavDropdown
                      className="justify-content-end mx-auto"
                      title="Usuário"
                      id={`offcanvasNavbarDropdown-expand-lg`}
                    >
                      <NavDropdown.Item to="/perfil" as={Navigator}>Usuário</NavDropdown.Item>
                      <NavDropdown.Item href="#action4">
                        Login
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item to="/registro-vaga" as={Navigator}>
                        Registro de vaga
                      </NavDropdown.Item>
                    </NavDropdown>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-danger">Search</Button>
                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
        </Navbar>

    
    )
}
export default NavBar;