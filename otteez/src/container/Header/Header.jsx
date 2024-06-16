import React from 'react';
import images from "../../constants/images";
import './Header.css';
import { SubHeading } from '../../components';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title="Chase the new Flavor"/>
      <h1 className="app__header-h1">The Key to Fine Dining</h1>
      <p className="p__opensans" style={{margin:'2rem 0'}}>This is a world class restaurant that is meant to be enjoyed by family and friends, it is expected that you have a good and enjoyable time while dining with us</p>
      <button type="button" className="custom__button">Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
   <img src={images.welcome} alt='header-img'/>
    </div>
  </div>
);

export default Header;
