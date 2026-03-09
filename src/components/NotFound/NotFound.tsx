import { Link } from 'react-router-dom';
import './styles.css';

export default function NotFound() {
  return (
    <div className="not-found">
      <h1>404 Not Found</h1>
      <Link to="/" className="not-found-link">Go to home page</Link>
    </div>
  );
}
