
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { authLogout } from "@store/auth/authSlice";
import { Badge,Navbar,Nav, Container, NavDropdown } from "react-bootstrap"
import styles from "./styles.module.css"

import { NavLink } from "react-router-dom";
const {headerContainer,headerLogo,dashLink}=styles;
export default function Header() {
  const dispatch = useAppDispatch();

  const { accessToken, user } = useAppSelector((state) => state.auth);

  

  return (
    <header>
        <div className={headerContainer}>
            <h1 className={headerLogo}>
                 <Badge>Matrix</Badge></h1>
           <NavLink to="dashboard" className={dashLink}>Dashborad</NavLink>
        </div>
        <Navbar collapseOnSelect expand="lg" bg="dark" data-bs-theme="dark">
        <Container>
        
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">Home</Nav.Link>
            <Nav.Link as={NavLink} to="posts">Posts</Nav.Link> 
            </Nav>
            <Nav className="ms-auto">
              {!accessToken ? (
                <>
                  <Nav.Link as={NavLink} to="login">
                    Login
                  </Nav.Link>
                  <Nav.Link as={NavLink} to="register">
                    Register
                  </Nav.Link>
                </>
              ) : (
                <NavDropdown
                  title={`Welcome: ${user?.name}`}
                  id="basic-nav-dropdown"
                >
                  
                  <NavDropdown.Divider />
                  <NavDropdown.Item
                    as={NavLink}
                    to="/"
                    onClick={() => dispatch(authLogout())}
                  >
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              )}
            </Nav>
            
        </Navbar.Collapse>
        </Container>
        </Navbar>
        

    </header>
  )
}
