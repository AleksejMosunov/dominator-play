import React from 'react';
import './styles.css';
import plus from '../../assets/plus.svg';


type ApartButtonProps = {
  text: string;
};

export default function ApartButton({ text }: ApartButtonProps) {
  return (
    <div className='apart-button-div'>
      <span className='apart-text'>{text}</span>
      <button className='apart-btn'>
        <img src={plus} alt='plus' width={24} height={24} />
      </button>
    </div>
  );
}
