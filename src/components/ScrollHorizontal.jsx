import React, { useState } from 'react';
import bg1 from '../assets/1.jpg';
import bg2 from '../assets/2.jpg';
import bg3 from '../assets/3.jpg';
import bg4 from '../assets/4.jpg';
import bg5 from '../assets/5.jpg';
import bg6 from '../assets/6.jpg';
import bg7 from '../assets/7.jpg';
import bg8 from '../assets/Morphling.jpg';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

function ScrollHorizontal() {
  const images = [bg1, bg2, bg3, bg4, bg5, bg6, bg7, bg8];

  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
  };

  const slideLeft = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById('slider');
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div className='pb-5 bg-black'>
      <img
        className='w-full h-[440px] object-cover'
        src={images[selectedImageIndex]}
        alt={`Selected Image`}
      />
      <div className='relative flex items-center'>
        <MdChevronLeft
          className='opacity-50 cursor-pointer hover:opacity-100'
          onClick={() => {
            slideLeft();
            setSelectedImageIndex((prevIndex) =>
              prevIndex === 0 ? images.length - 1 : prevIndex - 1
            );
          }}
          size={40}
        />
        <div
          id='slider'
          className='w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide'
        >
          {images.map((image, index) => (
            <img
              key={index}
              className='w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300'
              src={image}
              alt={`Image ${index + 1}`}
              onClick={() => handleImageClick(index)}
            />
          ))}
        </div>
        <MdChevronRight
          className='opacity-50 cursor-pointer hover:opacity-100'
          onClick={() => {
            slideRight();
            setSelectedImageIndex((prevIndex) =>
              prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
          }}
          size={40}
        />
      </div>
    </div>
  );
}

export default ScrollHorizontal;
