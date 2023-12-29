import React, { useState } from 'react';

const ImageToggle = () => {
  const [isImage1Visible, setIsImage1Visible] = useState(true);

  const toggleImage = () => {
    setIsImage1Visible((prev) => !prev);
  };

  return (
    <div>
      <h2>Image Toggle</h2>
      <img
        src={isImage1Visible ? 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv6_aP1oiOIg2FPSd-vDPqsnUtldyyIcR8Lg&usqp=CAU' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxWXSjU0GH9vwoCxsz3OZ-r60HzGl4DBdfVw&usqp=CAU'}
        alt={isImage1Visible ? 'Image 1' : 'Image 2'}
        onClick={toggleImage}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};

export default ImageToggle;
