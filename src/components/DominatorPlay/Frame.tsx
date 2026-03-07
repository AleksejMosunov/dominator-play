import React from 'react';

type FrameProps = {
  title: string;
  description: string;
};

export default function Frame({ title, description }: FrameProps) {
  return (
    <div className='frame-div'>
      <h3 className='frame-title'>{title}</h3>
      <p className='frame-description'>{description}</p>
    </div>
  );
}
