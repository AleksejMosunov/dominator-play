import img from '../../../../../assets/img.png';
import img2 from '../../../../../assets/img2.png';
import './styles.css';

type FrameItemProps = {
  timer: boolean;
};

export default function FrameItem({ timer }: FrameItemProps) {
  return (
    <div className='frame-item-div'>
      <img className='item-img' src={timer ? img : img2} alt='frame-item' />
    </div>
  );
}
