import StayAheadComponent from './components/Ahead/StayAheadComponent';
import Apart from './components/Apart/Apart';
import DominatorPlay from './components/DominatorPlay/DominatorPlay';
import HeroBanner from './components/HeroBanner/HeroBanner';
import UpcomingReleases from './components/UpcomingReleases/UpcomingReleases';


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
