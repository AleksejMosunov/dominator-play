
import './styles.css';
import ApartButton from './ApartButton';

export default function Apart() {
  return (
    <div className='apart-container'>
      <h2>
        WHAT SETS US APART
      </h2>
      <div className='apart-div'>
        <div className='apart-left-part'>
          <h2>
            What makes us different
          </h2>
          <div className='apart-left-btn-div'>
            <ApartButton text='Flexible game customization' />
            <ApartButton text='Gamification with advantage' />
            <ApartButton text='Configurable game architecture' />
            <ApartButton text='Designed for lobby visibility' />
          </div>
        </div>
        <div className='apart-right-part'>
          <h2>
            Partner benefits
          </h2>
          <div className='apart-right-btn-div'>
            <ApartButton text='24/7 technical support' />
            <ApartButton text='Exclusive early access' />
            <ApartButton text='Real-time analytics' />
            <ApartButton text='Custom integration' />
          </div>
        </div>
      </div>
    </div>
  );
}
