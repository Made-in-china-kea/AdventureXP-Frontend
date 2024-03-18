// App.js
import React from 'react';
import Subpage from './src/components/Subpage.tsx';

function Biking() {
  return (
    <div>
      <Subpage title="Biking Basics" content="Learn all about the basics of biking, from choosing the right bike to essential safety tips." />
      {/* Add more Subpage components as needed for other topics */}
    </div>
  );
}

export default Biking;
