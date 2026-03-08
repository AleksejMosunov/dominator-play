import img from '../../../../../assets/img.png';
import img2 from '../../../../../assets/img2.png';
import './styles.css';

type FrameItemProps = {
  timer: boolean;
};

export default function FrameItem({ timer }: FrameItemProps) {

  return (
    <div className='frame-item-div'>
      <img
        className="item-img"
        src={timer ? img : img2}
        alt="frame-item"
        style={{
          filter: timer ? "grayscale(100%) blur(5px)" : "none"
        }}
      />
      {timer &&

        <div className='timer-div'>
          <div className='timer-grid'>
            <div className='timer-cell'>
              <div style={{ display: 'flex', gap: '5px', alignItems: 'baseline' }}>
                <span className='item-timer' style={{ color: '#000000', }}>00</span>
                <span style={{ color: 'grey', fontSize: 'clamp(18px, 2.4vw, 60px)' }}>:</span>
              </div>
              <span className='timer-label' style={{ color: '#000000' }}>day</span>
            </div>
            <div className='timer-cell'>
              <div style={{ display: 'flex', gap: '5px', alignItems: 'baseline' }}>
                <span className='item-timer'>05</span>
                <span style={{ color: 'grey', fontSize: 'clamp(18px, 2.4vw, 60px)' }}>:</span>
              </div>
              <span className='timer-label'>hour</span>
            </div>
            <div className='timer-cell'>
              <div style={{ display: 'flex', gap: '5px', alignItems: 'baseline' }}>
                <span className='item-timer'>08</span>
                <span style={{ color: 'grey', fontSize: 'clamp(18px, 2.4vw, 60px)' }}>:</span>
              </div>
              <span className='timer-label'>minutes</span>
            </div>
            <div className='timer-cell'>
              <span className='item-timer'>32</span>
              <span className='timer-label'>seconds</span>
            </div>
          </div>
          <div className="progress">
            <div className="progress-bar"></div>
          </div>
        </div>

      }
    </div>
  );
}
