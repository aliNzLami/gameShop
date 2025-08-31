import React, { useRef } from 'react'
import Title from './Title'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function HeaderCollection({ text1, text2, description = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus quod perferendis"}) {
  
  const headerRef = useRef(null);
  const descriptionRef = useRef(null);

  useGSAP(() => {
    if(!headerRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: descriptionRef.current,
        start: 'top bottom',
        toggleActions: "play none none reset", 
      }
    });

    tl.from(descriptionRef.current, {
      opacity: 0,
      duration: 0.5,
    })

    tl.from(headerRef.current, {
      x: 100,
      opacity: 0,
      duration: 5,
      ease: 'elastic'
    })

    
  }, [])
  
  return (
    <>
        <div ref={headerRef} className='text-center text-30'>
            <Title text1={text1} text2={text2} />
        </div>
        <p ref={descriptionRef} className='w-3/4 m-auto text-18 sm:text-sm md:text-base text-gray-400 text-center mb-15'>
            { description }
        </p>
    </>
  )
}

export default HeaderCollection