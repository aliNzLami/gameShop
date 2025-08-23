import React from 'react';
import policyExchange from "../../assets/icons/iconPics/policy.png";
import policySupport from "../../assets/icons/iconPics/headphone.png";
import policyDaysReturn from "../../assets/icons/iconPics/check.png";

function Policy() {

    const policies = [
        {
            img: policyExchange,
            title: "Easy Exchange Policy",
            description: "We offer free exchange policy",
            animation: "showSmoothly_toRight",
        },
        {
            img: policyDaysReturn,
            title: "7 Days Return Policy",
            description: "We provide 7 days free return policy",
            animation: "showSmoothly",
        },
        {
            img: policySupport,
            title: "Best Customer Support",
            description: "We provide 24/7 customer supporrt",
            animation: "showSmoothly_toLeft",
        },
    ]

    return (
        <section>
            <div className='flex flex-col sm:flex-row justify-around gap-12 sm:gap--2 text-center pb-20 text-xs sm:text-sm md:text-base text-gray-700'>
                
                {
                    policies.map(item => 
                        <div key={item.title} className={`${item.animation} policyItem`}>
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