
import { Link } from 'react-router-dom';
import './styles.css';
import langIcon from '../../assets/lang.svg';
import arrowIcon from '../../assets/downArrow.svg';

function Navigation() {
  return (
    <nav style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
      <Link to="/games" className="nav-item" style={{ color: '#FF4F8B' }}>Games</Link>
      <Link to="/about" className="nav-item">About Us</Link>
      <div className='nav-news-div'>
        <Link to="/news" className="nav-item">News</Link>
        <button style={{ backgroundColor: 'transparent', border: 'none' }}>
          <img src={arrowIcon} alt="arrow" width={20} height={20} />
        </button>

      </div>
      <div className='nav-lang-div'>
        <img src={langIcon} alt="language" width={20} height={20} />
        <button style={{ backgroundColor: 'transparent', border: 'none' }}>
          <img src={arrowIcon} alt="arrow" width={20} height={20} />
        </button>
      </div>
      <button className="nav-btn">Client Area</button>
    </nav>
  );
}

export default Navigation;
