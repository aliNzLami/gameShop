import React, { useRef } from 'react';
import policyExchange from "../../assets/icons/iconPics/policy.png";
import policySupport from "../../assets/icons/iconPics/headphone.png";
import policyDaysReturn from "../../assets/icons/iconPics/check.png";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function Policy() {

    const policiesRef = useRef([])

    const policies = [
        {
            img: policyExchange,
            title: "Easy Exchange Policy",
            description: "We offer free exchange policy",
            animation: "toRight",
        },
        {
            img: policyDaysReturn,
            title: "7 Days Return Policy",
            description: "We provide 7 days free return policy",
            animation: "toStatic",
        },
        {
            img: policySupport,
            title: "Best Customer Support",
            description: "We provide 24/7 customer supporrt",
            animation: "toLeft",
        },
    ]

    useGSAP(() => {
        if(!policiesRef.current.length) return;

        
        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: policiesRef.current,
            start: 'top bottom',
            toggleActions: "play none none reset", 
            }
        });

        policiesRef.current.forEach(element => {
            if(element.classList.contains('toStatic')) {
                tl.from(element, {
                    opacity: 0,
                    duration: 0.5,
                })
            }
            else {
                tl.from(element, {
                    x: element.classList.contains('toRight') ? 100 : -100 ,
                    opacity: 0,
                    duration: 0.3,
                    ease: 'elastic'
                })
            }
        })
    }, [])

    return (
        <section>
            <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap--2 text-center pb-20 text-xs sm:text-sm md:text-base text-gray-700'>
                
                {
                    policies.map((item, index) => 
                        <div  
                            key={item.title} 
                            ref={(element) => policiesRef.current[index] = element}
                            className={`${item.animation} policyItem`}
                        >
                            <img className='w-12 m-auto mb-3' src={item.img} />
                            <p className='font-semibold mainPurpleText text-18'>
                                { item.title }
                            </p>
                            <p className='text-gray-400 text-16'>
                                { item.description }
                            </p>
                        </div>
                    )
                }
            </div>
        </section>
    )
}

export default Policy