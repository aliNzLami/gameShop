import React, { useRef } from 'react';

import spidey from '../../assets/pictures/webPics/spidey.webp';
import controller from '../../assets/pictures/webPics/controller.webp';
import hands from '../../assets/pictures/webPics/hands.webp';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Parallax() {

    const slideRef = useRef([]);

    const content = [
      {
        img: spidey,
        title: 'You Can Fly',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      },
      {
        img: controller,
        title: 'You Can Control',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      },
      {
        img: hands,
        title: 'In Your Hnads',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
      },
    ]

    useGSAP(() => {
      if(slideRef.current.length !== content.length) return;

      const tl = gsap.timeline({
          scrollTrigger: {
          trigger: slideRef.current,
          start: 'top bottom',
          toggleActions: "play none none reset", 
          }
      });

      slideRef.current.forEach(element => {
        tl.from(element, {
          opacity: 0,
          duration: 1,
        })
      })
    }, [])

    return (
      <div>
        {
          content.map((item, index) => {
            return(
              <div key={item.title} className="slide">
                  <div className="slide-bg" style={{backgroundImage: `url(${item.img})`}}></div>
                  <div className="slide-overlay"></div>
                  <div ref={(element) => slideRef.current[index] = element } className="slide-content">
                      <h1 className="slide-title">{item.title}</h1>
                      <p className="slide-subtitle">{item.description}</p>
                  </div>
              </div>
            )
          })
        }
        
      </div>
    )
}

export default Parallax