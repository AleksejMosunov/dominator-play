import React from 'react';
import img from '../../assets/img.png';
import img2 from '../../assets/img2.png';

type FrameItemProps = {
  timer: boolean;
};

export default function FrameItem({ timer }: FrameItemProps) {
  return (
    <div>
      <img className='item-img' src={timer ? img : img2} alt='frame-item' />
    </div>
  );
}
