import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Typed = () => {
  return (
    <div id="typed">
      <TypeAnimation
        sequence={[
          'Welcome, I am Javier', // Types 'One'
          2000, // Waits 1s
          'and this is my Portfolio', // Deletes 'One' and types 'Two'
          2000, // Waits 2s
          'Click anywhere :)',
          2500, // Types 'Three' without deleting 'Two'
        ]}
        wrapper="h1"
        cursor={true}
        repeat={Infinity}
        style={{ fontSize: '1.5rem' }}
      />
    </div>
  );
};

export default Typed;
