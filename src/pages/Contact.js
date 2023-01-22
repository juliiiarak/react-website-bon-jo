import React from 'react'
import white from "../assets/white.jpg";
import "../styles/Contact.css";
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

function Contact() {
  return (
    <div className="contact">
      <div
        className="leftSide"
        style={{ backgroundImage: `url(${white})` }}
      ></div>
      <div className="rightSide">
        <h1> Ви можете звязатись з нами через Інстаграм або Телеграм, які знаходяться внизу сторінки</h1>
      </div>
    </div>
  );
}

export default Contact;