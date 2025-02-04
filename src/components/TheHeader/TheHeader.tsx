import './TheHeader.scss'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function TheHeader() {
  return (
    <Navbar className="custom-header" expand="lg">
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img className="logo me-2" src="src/assets/logo.png" alt="Логотип" />
          <h2 className="brand-name">Моя лабораторія</h2>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <NavDropdown
              title="Меню"
              id="basic-nav-dropdown"
              className="nav-dropdown"
            >
              <NavDropdown.Item as={Link} to="/labaratory">
                Лабараторiя
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/education">
                Навчальний процес
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/equipment">
                Обладнання
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/research">
                Наукова діяльність
              </NavDropdown.Item>
              <NavDropdown.Divider />
            </NavDropdown>
            <Nav.Link className="nav-link-custom">
              <Link to="/cabinet" className="custom-nav-link">
                Кабінет
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
