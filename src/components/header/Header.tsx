import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import logo from '../../assets/logoHeader.svg';

function Header() {
  return (

    <div className='header-div'>
      <Link to="/">
        <img src={logo} alt="Dominator Play Logo" className='logo' width={344} height={56} />
      </Link>

      <Navigation />
    </div>

  );
}

export default Header;
