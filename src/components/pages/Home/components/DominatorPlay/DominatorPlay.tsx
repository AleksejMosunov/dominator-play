import React from 'react';
import Frame from './Frame';
import './styles.css';

export default function DominatorPlay() {
  return (
    <div className='dominator-play-div'>
      <h1>
        Dominator Play:<br />
        Path to Performance
      </h1>
      <p>
        We empower operators with customizable, scalable games<br />
        built to earn placement, sustain retention, and drive long-<br />
        term revenue growth.
      </p>
      <div className='dominator-frame-div'>
        <Frame title={
          <>
            Full<br />
            Customization
          </>
        } description={'RTP, Volatility & Branding'} />
        <Frame title={'Mobile-First'} description={
          <>
            Development Powered by<br />
            Product Analytics
          </>
        } />
        <Frame title={'Progression'} description={
          <>
            Gamification Built for<br />
            Retention & LTV
          </>
        } />
        <Frame
          title="Operator Growth"
          description={
            <>
              Support Through<br />
              Content & Promotions
            </>
          }
        />
      </div>
    </div>
  );
}
