import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Logo from './../../../assets/images/logo.jpg';
import './AppHeader.scss';

const AppHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [navItems, setNavItems] = useState([
    { name: 'Client Area Home', slug: '/products', active: false },
    { name: 'Digitizing', slug: '/shop', active: false },
    { name: 'Patches', slug: '/shop', active: false },
    { name: 'Vector', slug: '/shop', active: false },
    { name: 'My Account', slug: '/shop', active: false },
    { name: 'Contact Us', slug: '/shop', active: false },

  ]);

  const [navbar, setNavbar] = useState(false);

  useEffect(() => {
    const updatedNavItems = navItems.map(item => ({
      ...item,
      active: item.slug === location.pathname,
    }));
    setNavItems(updatedNavItems);
  }, [location.pathname]);

  return (
    <>

      <Navbar bg="white" expand="lg" className='sticky-top'>
        <Container>
          <Navbar.Brand>
            <img
              src={Logo}
              className='logo-top img-fluid bg-black d-block d-lg-none'
              alt="Logo"
            />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="navmenu" className="bg-white" />

          <Navbar.Collapse id="navmenu" className="justify-content-between top-menu mt-3 mt-lg-0 py-3">
            <img
              src={Logo}

              className='logo-top img-fluid bg-black d-none d-lg-block'
              alt="Logo"
            />

            <Nav className="align-items-center gap-lg-4 gap-2 mb-4 mb-lg-0">
              {navItems.map(item => (
                <Nav.Item key={item.slug}>
                  <h6 className='mb-0'>
                    <Link
                      to={item.slug}
                      className={`nav-link p-0 ${item.active ? "active" : ""} ${navbar ? "text-white" : "text-black"}`}
                    >
                      {item.name}
                    </Link>
                  </h6>
                </Nav.Item>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default AppHeader