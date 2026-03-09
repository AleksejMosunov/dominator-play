
import './styles.css';
import logo from '../../assets/logo.svg';
import linkedinIcon from '../../assets/Lin.svg';
import facebookIcon from '../../assets/Facebook.svg';
import icon from '../../assets/18.svg';
import { Link } from 'react-router';

export default function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-div'>
        <div className='footer-info'>
          <img src={logo} alt="logo" width={82} height={40} />
          <img src={icon} alt="18" width={32} height={28} />
          <span className='footer-info-text'>
            Our website is intended for<br />users aged 18 and over.
          </span>
          <a className='footer-email' href='mailto:partners@dominatorplay.com'>
            partners@dominatorplay.com
          </a>
          <div className='footer-social'>
            <a style={{ border: 'none', cursor: 'pointer' }}>
              <img src={linkedinIcon} alt="linkedin" width={24} height={24} />
            </a>
            <a style={{ border: 'none', cursor: 'pointer' }}>
              <img src={facebookIcon} alt="facebook" width={24} height={24} />
            </a>
          </div>
        </div>
        <div className='footer-explore'>
          <h4 className='footer-title'>EXPLORE</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', color: 'red' }}>
            <Link to="/">Home</Link>
            <li><Link to="/games">Our Games</Link></li>
            <li><Link to="/about">About us</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
          </div>
        </div>
        <div className='footer-legal'>
          <h4 className='footer-title'>LEGAL</h4>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/compliance">Compliance</Link></li>
            <li><Link to="/cookies">Cookie Policy</Link></li>
          </div>
        </div>
      </div>
      <div className='footer-copyright'>
        2026 © Brand All Rights Reserved
      </div>
    </div >
  );
}
