import React from 'react';

type FrameProps = {
  title: React.ReactNode;
  description: React.ReactNode;
};

export default function Frame({ title, description }: FrameProps) {
  return (
    <div className='frame-div'>
      <h2 className='frame-title'>{title}</h2>
      <p className='frame-description'>{description}</p>
    </div>
  );
}
