import React, { useRef, useState } from 'react';

// gsap
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

// components
import life from "../../assets/pictures/webPics/life2.mp4";
import CustomVideoPlayer from '../../components/CustomVideoPlayer';
import Loading from '../../components/Loading';

function Life() {

    const [loading, setLoading] = useState(true)

  // ----------------------- Ref ----------------------- //
    const header = useRef(null);
    const subHeader_toLeft = useRef(null);
    const subHeader_toRight = useRef(null);

  // ----------------------- Animations ----------------------- //
    useGSAP(() => {
        if(!header.current) return

        gsap.from(subHeader_toLeft.current, {
            opacity: 0.3,
            x: 100,
            duration: 2
        })

        gsap.from(subHeader_toRight.current, {
            opacity: 0.3,
            x: -100,
            duration: 2
        })

        gsap.from(header.current, {
            opacity: 0,
            duration: 1.5
        })

    }, [])
    
    return (
        <>
            
            <div className={`firstLoading ${loading ? 'flex' : 'hidden'}`}>
                <Loading />
            </div>

            <header>
                <div className='flex flex-col sm:flex-row border border-gray-400 mt-15 md:mt-0'>
            
                    <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
                        <div className="text-[#414141]">
                            <div ref={subHeader_toLeft} className="flex items-center gap-2">
                                <div className="w-8 md:w-11 h-[2px] mainPurpleBg" />
                                <div className="font-medium text-sm md:text-base text-gray-400">
                                    IT'S NOT A GAME
                                </div>
                            </div>
                            <h1 ref={header} className='prata-font text-3xl sm:py-3 lg:text-5xl leading-relaxed mainPurpleText'>
                                IT'S A LIFE
                            </h1>
                            <div ref={subHeader_toRight} className="flex items-center gap-2">
                                <p className='font-semibold text-sm md:text-base text-gray-400'>IT'S A TIME TRAVEL</p>
                                <div className='w-8 md:w-11 h-[2px] mainPurpleBg' />
                            </div>
                        </div>
                    </div>

                    <div className="w-full sm:w-1/2 flex justify-end">
                        <CustomVideoPlayer
                            src={life}
                            isLoaded={() => setLoading(false)}
                        />
                    </div>
                </div>
            </header>
        </>
    )
}

export default Life;