import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from 'react-router-dom';
import BannerImage from '../assets/cake3.jpg';
import '../styles/Home.css';

function Home() {
    return (
      <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        <div className="headerContainer">
          <h1> Кондитерська "BON APETTIT JO" </h1>
          <p> Сімейна кондитерська </p>
          <Link to="/menu">             
            <button> ЗАМОВИТИ ЗАРАЗ </button>
          </Link>
        </div>
      </div>
    );
  }

export default Home