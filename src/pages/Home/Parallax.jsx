import React from 'react';

import spidey from '../../assets/pictures/webPics/spidey.webp';
import controller from '../../assets/pictures/webPics/controller.webp';
import hands from '../../assets/pictures/webPics/hands.webp';

function Parallax() {

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

    return (
      <div>
        {
          content.map(item => {
            return(
              <div key={item.title} className="slide">
                  <div className="slide-bg" style={{backgroundImage: `url(${item.img})`}}></div>
                  <div className="slide-overlay"></div>
                  <div className="slide-content">
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