import React from 'react';
import Navdata from './Navdata';
import Carouse from './Carouse';
import Card1 from './Card1';
import Card2 from './Card2';
import './Header.css';

const Header = () => {
  return (
  <div className="head__main">
    <Navdata />
    <Carouse />
    <div className="cards">
      <Card1 />
      <Card2 />
    </div>
</div>

  );
};
export default Header;