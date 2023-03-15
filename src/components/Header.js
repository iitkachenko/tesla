import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

function Header() {
  const [burgerIsOpen, setBurgerIsOpen] = useState(false);
  const [navbarHasBckg, setNavbarHasBckg] = useState(false);
  const cars = useSelector(selectCars);

  useEffect(() => {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    window.addEventListener('scroll', () => changeNavbarBckg(navbarHeight));
    return window.removeEventListener('scroll', changeNavbarBckg);
  }, []);

  const changeNavbarBckg = (navbarHeight) => {
    window.scrollY >= navbarHeight ? setNavbarHasBckg(true) : setNavbarHasBckg(false);
  }

  return (
    <Container className={navbarHasBckg ? 'navbar has-bg' : 'navbar'}>
      <a href="/">
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {!!cars.length && 
          <ul>
            {cars.map((car, index) => (
              <li key={index}><a href="#">{car}</a></li>
            ))}
          </ul>
        }
      </Menu>
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerIsOpen(true)}/>
      </RightMenu>
      <BurgerNav show={burgerIsOpen}>
        <CustomClose onClick={() => setBurgerIsOpen(false)}/>
        
        <ul>
          {!!cars.length && cars.map((car, index) => (
            <li key={index}><a href="#">{car}</a></li>
          ))}
          <li><a href="#">Existing Inventory</a></li>
          <li><a href="#">Used Inventory</a></li>
          <li><a href="#">Trade-in</a></li>
          <li><a href="#">Cybertruck</a></li>
          <li><a href="#">Roadaster</a></li>
        </ul>
      </BurgerNav>

    </Container>
  )
}

export default Header

const Container = styled.div`
  min-height: 60px;
  width: 100%;
  padding: 0 20px;
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  transition: background-color .2s ease-in;

  &.has-bg {
    color: red;
    background: #ffffffd9;
  }
`;

const Menu = styled.nav`
  flex: 1;

  ul {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  li {
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    white-space: nowrap;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;

  a {
    font-weight: 600;
    text-transform: uppercase;
    margin-right: 10px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
  position: relative;
  top: -1px;

  :hover path {
    color: var(--hover-bg-color);
  }
`

const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background: #fff;
  width: 300px;
  padding: 20px;
  text-align: left;
  display: flex;
  flex-direction: column;
  transform: ${props => props.show ? 'translateX(0)': 'translateX(100%)'};
  transition: transform .2s ease-in-out;


  li {
    border-bottom: 1px solid rgba(0, 0, 0, .2);
  
    a {
      display: block;
      padding: 15px 0;
      font-weight: 600;
    }
  }
`

const CustomClose = styled(CloseIcon)`
  align-self: flex-end;
  cursor: pointer;
  :hover path {
    color: var(--hover-bg-color);
  }
`