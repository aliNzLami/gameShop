import React from 'react';
import pic from "../../assets/pictures/webPics/about.webp";
import Title from "../../components/Collection/Title";
import Container from "../../components/Container";
import Subscribe from "../../components/Subscribe";

function About() {

    const content = [
      "Life Game was born out of a passion for innovation and a desire to revolutionize the way people shop online. Our journey began with a simple idea: to provide a platform where customers can easily discover, explore, and purchase a wide range of products from the comfort of their homes.",
      "Since our inception, we've worked tirelessly to curate a diverse selection of high-quality products that cater to every taste and preference. We offer an extensive collection sourced from trusted brands and suppliers.",
      "Our Mission",
      "Our mission at Life Game is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond."
    ]

    const whyUs = [
      {
        title: "Quality Assurance",
        paragraph: "We meticulously select and vet each product to ensure it meets our stringent quality standard"
      },
      {
        title: "Convenience",
        paragraph: "With our user-friendly interface and hassle- free ordering process, shopping has never been easier"
      },
      {
        title: "Exceptional Customer Service",
        paragraph: "Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority"
      },
    ]
    return (
      <>
        <Container>
          <article>
            <div className="text-2xl text-center pt-20 mainBorder-t">
              <div className='showSmoothly'>
                <Title text1='ABOUT' text2='US' />
              </div>
            </div>

            <div className="my-10 flex flex-col md:flex-row gap-15">
              <img className='w-full md:max-w-[500px] showSmoothly' src={pic} />

              <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 showSmoothly_toLeft'>
                {
                  content.map((item, index) => {
                    return(
                      <p className={item === "Our Mission" ? "font-bold" : ""} key={index}>
                          { item }
                      </p>
                    )
                  })
                }
              </div>
            </div>
          </article>

          <section>
            <div className="text-xl py-4">
              <Title text1='WHY' text2='CHOOSE US' />
            </div>

            <div className="flex flex-col md:flex-row text-sm mb-20">
              {
                whyUs.map((item, index) => {
                  return (
                    <div key={index} className="whyChooseUsBox mainBorder px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-6">
                      <p className='font-bold text-18'>
                        { item.title }
                      </p>
                      <p className='text-gray-600 text-16'>
                        { item.paragraph }
                      </p>
                    </div>
                  )
                })
              }
            </div>
          </section>
        </Container>
          
        <Subscribe />
      </>
    )
}

export default About