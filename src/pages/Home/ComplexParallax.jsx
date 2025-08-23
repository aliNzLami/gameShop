import React from 'react';

import FlipBox from '../../components/FlipBox'
import img1 from '../../assets/pictures/webPics/leftAnime.webp'
import img2 from '../../assets/pictures/webPics/rightAnIme.webp'
import img3 from '../../assets/pictures/webPics/dsGirl.webp'

function ComplexParallax() {
  return (
    <div>
      <FlipBox 
        leftImg={img1}
        rightImg={img2}
      >
        <div style={{
            backgroundImage: `url(${img3})`,
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            width: '100%',
            height: '100%'
        }} />
      </FlipBox>
    </div>
  )
}

export default ComplexParallax