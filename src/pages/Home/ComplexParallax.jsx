import React, { useRef } from 'react';

import img1 from '../../assets/pictures/webPics/leftAnime.webp'
import img2 from '../../assets/pictures/webPics/rightAnIme.webp'
import img3 from '../../assets/pictures/webPics/spaceman.webp'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

function ComplexParallax() {

  const containerRef = useRef(null);
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const centerRef = useRef(null);

  useGSAP(() => {
    if(!containerRef) return;
    
    const curtain = gsap.timeline({
        scrollTrigger: {
        trigger: containerRef.current,
        start: 'top center',
        toggleActions: "play none none reverse", 
        }
    });
    curtain.to(leftRef.current, {
        xPercent: -100,
        duration: 1,
    })
    curtain.to(rightRef.current, {
      xPercent: 100,
      duration: 1,
    })

    const img = gsap.timeline({
        scrollTrigger: {
        trigger: centerRef.current,
        start: 'center center',
        toggleActions: "play none none reverse", 
      }
    });

    img.to(centerRef.current, {
      scale: 0.5,
      duration: 0.3,
    })
  }, [])

  return (
    <div>

      <div ref={containerRef} className='curtainContainer'>
          <div ref={leftRef} className='imgLeft'>
            <img src={img1} alt="japanese girl y2k" />
          </div>
          <div ref={rightRef} className='imgRight'>
            <img src={img2} alt="japanese girl y2k" />
          </div>
          
          <img ref={centerRef} className='imgCenter' src={img3} alt="spaceman y2k" />
      </div>
    </div>
  )
}

export default ComplexParallax