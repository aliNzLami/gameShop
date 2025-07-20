import React from 'react';

import life from "../../assets/pictures/webPics/life2.mp4";
import lifePoster from "../../assets/pictures/webPics/lifePoster.PNG";
// import CustomVideoPlayer from '../../components/CustomVideoPlayer';

function Life() {
    return (
        <>
            <div className='flex flex-col sm:flex-row border border-gray-400'>
        
                <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
                    <div className="text-[#414141]">
                        <div className="flex items-center gap-2 bestSellerText_left">
                            <div className="w-8 md:w-11 h-[2px] mainPurpleBg" />
                            <div className="font-medium text-sm md:text-base text-gray-400">
                                IT'S NOT A GAME
                            </div>
                        </div>
                         <h1 className='prata-font text-3xl sm:py-3 lg:text-5xl leading-relaxed showSmoothly bestSellerText mainPurpleText'>
                            IT'S A LIFE
                        </h1>
                        <div className="flex items-center gap-2 bestSellerText_right">
                            <p className='font-semibold text-sm md:text-base text-gray-400'>IT'S A TIME TRAVEL</p>
                            <div className='w-8 md:w-11 h-[2px] mainPurpleBg' />
                        </div>
                    </div>
                </div>

                <div className="w-full sm:w-1/2 flex justify-end">
                    {/* <CustomVideoPlayer
                        src={life}
                        poster={lifePoster}
                    /> */}
                </div>
            </div>
        </>
    )
}

export default Life;