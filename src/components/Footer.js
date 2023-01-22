import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
      <a href="https://instagram.com/bon_appetit_jo?igshid=MTA0ZTI1NzA="> <InstagramIcon /> </a>
      <a href="t.me/@rak_julia"> <TelegramIcon /> </a>
      
      </div>
      <p> &copy; 2022 bonapettitJO.com</p>
    </div>
  )
}

export default Footer