import React from 'react';
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
            <ApartButton text='Custom Game Development' />
            <ApartButton text='Data-Driven Game Design' />
            <ApartButton text='Dedicated Support Team' />
            <ApartButton text='Revenue Growth Focus' />
          </div>
        </div>
        <div className='apart-right-part'>
          <h2>
            Partner benefits
          </h2>
          <div className='apart-right-btn-div'>
            <ApartButton text='Custom Game Development' />
            <ApartButton text='Data-Driven Game Design' />
            <ApartButton text='Dedicated Support Team' />
            <ApartButton text='Revenue Growth Focus' />
          </div>
        </div>
      </div>
    </div>
  );
}
