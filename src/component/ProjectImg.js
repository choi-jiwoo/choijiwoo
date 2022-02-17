import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

function ProjectImg({ imgs }) {
  return (
    <Carousel className='overflow-hidden mt-2' variant='dark'>
      {imgs.map((img) => (
        <Carousel.Item key={img}>
          <img
            className='d-block object-left-top object-cover'
            src={img}
            alt='img'
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ProjectImg;
