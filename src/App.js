import React, { Fragment, useState } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import Boxes from './Boxes';
import AnimatedVisibility, { makeAnimationSlideLeft, makeAnimationSlideUpDown } from './AnimatedVisibility';


ToggleButton.propTypes = {
  label: PropTypes.string,
  isOpen: PropTypes.bool,
  onClick: PropTypes.func,
};

function ToggleButton({ label, isOpen, onClick }) {
  const icon = isOpen ?
    (<i className="fas fa-toggle-off fa-lg" /> ) :
    (<i className="fas fa-toggle-on fa-lg" /> );

  return (
    <button className="toggle" onClick={onClick}>
      {label} {icon}
    </button>
  );
}

Navbar.propTypes = {
  open: PropTypes.bool,
}
function Navbar({open}) {
  return (
    <nav className="bar nav">
      <li>Item 1</li>
      <li>Item 2</li>
      <li>Item 3</li>
    </nav>
  );
}
Sidebar.propTypes = {
  open: PropTypes.bool,
};
function Sidebar({open}) {

  return (
    <div className="sidebar">
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
        <li>Item 3</li>
      </ul>
    </div>
  );
}

const AnimatedSidebar = makeAnimationSlideLeft(Sidebar);
const AnimatedNavbar = makeAnimationSlideUpDown(Navbar);

function App() {
  const [navIsOpen, setNavOpen] = useState(false);
  const [sideBarIsOpen, setSideBarOpen] = useState(false);

  function toggleNav() {
    setNavOpen(!navIsOpen);
  }

  function toggleSideBar() {
    setSideBarOpen(!sideBarIsOpen);
  }

  return (
    <>
      <main className="main">

          <header className="bar header">
            <ToggleButton label="SideBar" isOpen={sideBarIsOpen} onClick={toggleSideBar} />
            <ToggleButton label="Navbar" isOpen={navIsOpen} onClick={toggleNav} />
            </header>
        <AnimatedNavbar  open={navIsOpen}/>
          <Boxes/>
      </main>
      <AnimatedSidebar  open={sideBarIsOpen}  className="on-top"/>
    </>
  );
}

export default App;
