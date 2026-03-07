
import FrameItem from './FrameItem';
import StayAhead from './StayAhead';
import './styles.css';

export default function UpcomingReleases() {
  return (
    <div className='upcoming-releases-div'>
      <h1>
        Upcoming Releases
      </h1>

      <div className='frame-items-div'>
        <FrameItem timer={true} />
        <FrameItem timer={false} />
        <FrameItem timer={true} />
        <FrameItem timer={true} />
        <FrameItem timer={true} />
        <StayAhead />
      </div>
    </div>
  );
}
