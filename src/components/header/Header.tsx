import Navigation from './Navigation';
import { Link } from 'react-router-dom';

function Header() {
  return (

    <div className='header-div'>
      <Link to="/">
        <h1>To-Do App</h1>
      </Link>

      <Navigation />
    </div>

  );
}

export default Header;
