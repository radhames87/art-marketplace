import { Link } from 'react-router-dom';
import {
  NavbarBrand, Navbar, Nav, NavItem, NavLink,
  UncontrolledDropdown, DropdownItem, DropdownMenu,
  DropdownToggle, NavbarToggler, Collapse
} from 'reactstrap';
import { useStore } from '../../state/storeHooks';

export function NavBar ({ user, logout }) {
  const { items } = useStore(({ cart }) => cart);

  return (
    <Navbar
      color='dark'
      dark
      expand='lg'
    >
      <NavbarBrand tag={Link} to='/' className='menu-item'>
        <span>Art Marketplace</span>
      </NavbarBrand>
      <NavbarToggler onClick={function noRefCheck () {
      }}
      />
      <Collapse navbar>
        <Nav
          className='me-auto'
          navbar
        >
          <NavItem>
            <NavLink tag={Link} to='/'>
              Inicio
            </NavLink>
          </NavItem>
        </Nav>
        <Nav navbar>
          {user ? <UserLinks user={user} logout={logout} items={items} /> : <GuestLinks />}
        </Nav>
      </Collapse>
    </Navbar>
  );
}

function GuestLinks () {
  return (
    <>
      <NavLink tag={Link} to='/login'>
        Inicia sesión
      </NavLink>
      <NavLink tag={Link} to='/register'>
        Regístrate
      </NavLink>
    </>
  );
}

function UserLinks ({ user, logout, items }) {
  return (
    <>
      {user.role === 'collector' && <NavItem>
        <NavLink tag={Link} to='/cart'>
          <i className='fa fa-shopping-cart' /> Carrito <span className='badge bg-info mx-3'>{items.length}</span>
        </NavLink>
      </NavItem>}
      <NavItem>
        <div className='profile-picture'>
          <img
            className='pp-user'
            src='images/profile_placeholder.svg' alt='profile'
          />
        </div>
      </NavItem>
      <UncontrolledDropdown nav>
        <DropdownToggle nav caret>
          <span>{user.username}</span>
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem>
            {user.role === 'admin' &&
              <Link to='/admin'>
                Administración
              </Link>}
            {(user.role === 'artist' || user.role === 'collector') &&
              <Link to='/profile'>
                Mi cuenta
              </Link>}
          </DropdownItem>
          <DropdownItem divider />
          <DropdownItem onClick={logout}>Salir</DropdownItem>
        </DropdownMenu>
      </UncontrolledDropdown>
    </>
  );
}
