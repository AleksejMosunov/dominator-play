import StayAheadComponent from '../../Ahead/StayAheadComponent';
import Apart from '../../Apart/Apart';
import DominatorPlay from '../../DominatorPlay/DominatorPlay';
import HeroBanner from '../../HeroBanner/HeroBanner';
import UpcomingReleases from '../../UpcomingReleases/UpcomingReleases';


function Home() {
  return (
    <div className='home-div'>
      <HeroBanner />
      <DominatorPlay />
      <UpcomingReleases />
      <Apart />
      <StayAheadComponent />
    </div>
  );
}

export default Home;
