import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

function TwentyYears() {

    const experienceBoxRef = useRef(null);
    const numberRef = useRef(null);
    const descriptionRef = useRef(null);

    useGSAP(() => {
        if(!experienceBoxRef) return;
        
        const tl = gsap.timeline({
            scrollTrigger: {
            trigger: experienceBoxRef.current,
            start: 'top bottom',
            toggleActions: "play none none reset", 
            }
        });

        tl.from(numberRef.current, {
            y: -100,
            opacity: 0,
            duration: 0.5,
            ease: 'power1.in'
        })

        tl.from(descriptionRef.current, {
            x: 100,
            opacity: 0,
            duration: 1,
            ease: 'elastic'
        })
    }, [])


    return (
        <section ref={experienceBoxRef}>
            <div className="flex justify-center mb-25 experiences_twenty ">

                <div >
                    <span ref={numberRef} className="twenty me-4 mainPurpleText"> 
                        20
                    </span>
                </div>
                
                <div ref={descriptionRef} className='experiences'>
                    <div className="text-3xl mainPurpleText text-center md:text-start">
                        YEARS of EXPERIENCE
                    </div>
                    <div className="mt-2 text-18 sm:text-16 md:text-base text-gray-400 text-center md:text-start">
                        We provide the best gaming collections for the best collectors
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TwentyYears