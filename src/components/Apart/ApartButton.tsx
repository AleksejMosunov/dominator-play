import React from 'react';
import './styles.css';

type ApartButtonProps = {
  text: string;
};

export default function ApartButton({ text }: ApartButtonProps) {
  return (
    <div className='apart-button-div'>
      <span className='apart-text'>{text}</span>
      <button className='apart-btn'>+</button>
    </div>
  );
}
