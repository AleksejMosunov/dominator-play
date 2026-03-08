import { useEffect, useMemo, useState } from 'react';
import img from '../../../../../assets/img.png';
import img2 from '../../../../../assets/img2.png';
import './styles.css';

type FrameItemProps = {
  timer: boolean;
};

const START_TOTAL_SECONDS = 5 * 60 * 60 + 8 * 60 + 32;

function formatTimeUnit(value: number) {
  return String(value).padStart(2, '0');
}

export default function FrameItem({ timer }: FrameItemProps) {
  const [secondsLeft, setSecondsLeft] = useState(START_TOTAL_SECONDS);

  useEffect(() => {
    if (!timer) {
      return;
    }

    const intervalId = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 0) {
          clearInterval(intervalId);
          return 0;
        }

        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer]);

  const timeParts = useMemo(() => {
    const days = Math.floor(secondsLeft / 86400);
    const hours = Math.floor((secondsLeft % 86400) / 3600);
    const minutes = Math.floor((secondsLeft % 3600) / 60);
    const seconds = secondsLeft % 60;

    return {
      days: formatTimeUnit(days),
      hours: formatTimeUnit(hours),
      minutes: formatTimeUnit(minutes),
      seconds: formatTimeUnit(seconds),
    };
  }, [secondsLeft]);

  const progress = Math.max(0, (secondsLeft / START_TOTAL_SECONDS) * 100);

  return (
    <div className='frame-item-div'
      style={{
        border: !timer ? "2px solid rgba(90, 31, 51, 1)" : "none",
        borderRadius: !timer ? "8px" : "0",
      }}
    >
      <img
        className="item-img"
        src={timer ? img : img2}
        alt="frame-item"
        style={{
          filter: timer ? "grayscale(100%) blur(5px)" : "none",

        }}
      />
      {timer &&

        <div className='timer-div'>
          <div className='timer-grid'>
            <div className='days-timer timer-cell'>
              <span className='item-timer'>{timeParts.days}</span>
              <span className='timer-label'>days</span>
            </div>
            <div className='points-timer'>
              <span className=''>:</span>
            </div>
            <div className='hours-timer timer-cell'>
              <span className='item-timer'>{timeParts.hours}</span>
              <span className='timer-label'>hours</span>
            </div>
            <div className='points-timer'>
              <span className=''>:</span>
            </div>
            <div className='minutes-timer timer-cell'>
              <span className='item-timer'>{timeParts.minutes}</span>
              <span className='timer-label'>minutes</span>
            </div>
            <div className='points-timer'>
              <span className=''>:</span>
            </div>
            <div className='seconds-timer timer-cell'>
              <span className='item-timer'>{timeParts.seconds}</span>
              <span className='timer-label'>seconds</span>
            </div>
          </div>

          <div className="progress">
            <div className="progress-bar" style={{ width: `90%` }}></div>
          </div>
        </div>
      }
    </div>
  );
}
