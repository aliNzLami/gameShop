import React from 'react'

function Subscribe() {

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    return (
        <aside>
            <div className='text-center showSmoothly mt-25 py-25 mainPurpleBg subscribe px-5'>
                <p className='text-2xl font-medium text-gray-800 text-white'>
                    Subscribe Now & Get 20% Off
                </p>
                <p className='mt-3 text-gray-400 text-18'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis, maiores
                </p>
                <form onSubmit={handleSubmit} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
                    <input type="email" placeholder='Enter Your Email' className='w-full sm:flex-1 outline-none' />
                    <button type='submit' className='text-white text-14 px-10 py-4 bg-white mainPurpleText font-bold cursor-pointer'>
                        SUBMIT
                    </button>
                </form>
            </div>
        </aside>
    )
}

export default Subscribe