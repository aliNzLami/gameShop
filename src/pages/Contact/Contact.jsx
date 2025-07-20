import React from 'react';

// img
import contact from "../../assets/pictures/webPics/contact.jpg";

// component
import Title from "../../components/Collection/Title";
import Container from "../../components/Container";
import Subscribe from "../../components/Subscribe";


function Contact() {

    const storeInfo = {
        title: "Our Store",
        street: "54709 Williams Station, Suite 350, London",
        email: "lifegame@email.com",
        phone: "+1 1111 1111 1111",
        
    }

    const careerInfo = {
      title: "Career at Life Game",
      paragraph: "Learn more about our teams and job openings.",
      btn: "Eplore Jobs"
    }

    return (
      <>
        <Container>
          <div className="text-center text-2xl pt-10 mainBorder-t">
            <div className='showSmoothly'>
              <Title text1='CONTACT' text2='US' />
            </div>
          </div>

          <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
            <img className='w-full md:max-w-[500px] showSmoothly' src={contact} />

            <div className='flex flex-col justify-center items-center items-start gap-6 showSmoothly_toLeft'>
              {
                Object.entries(storeInfo).map((item, index) => {
                  // item[0] = key
                  // item[1] = value
                  return(
                      <p key={index} className={item[0] === "title" ? "font-semibol text-xl text-gray-800" : "text-gray-400"}>
                        {
                          item[0] === "title"
                          ?
                            item[1]
                          :
                          `${item[0]}: ${item[1]}`
                        }
                      </p>
                  )
                })
              }
              
              {
                Object.entries(careerInfo).map((item, index) => {
                  // item[0] = key
                  // item[1] = value
                  return(
                      <p key={index} className={item[0] === "title" ? "font-semibol text-xl text-gray-800" : "text-gray-400"}>
                        {
                          item[0] !== "btn"
                          ?
                            item[1]
                          :
                          <button className='text-white cursor-pointer mainPurpleBg rounded px-3 py-2'>
                              { item[1] }
                          </button>
                        }
                      </p>
                  )
                })
              }
            </div>
          </div>
        </Container>

        <Subscribe />
      </>
    )
}

export default Contact