import React from 'react';

function FilterCollections({ title, list, showFilter, onChange }) {

    return (
        <div className={`filterbox_collection border border-gray-300 pl-5 py-3 my-5 ${showFilter ? '' : 'hidden'}`}>
            <p className='mb-3 text-sm font-medium'>
                { title }
            </p>
            <div className="flex flex-col gap-2 text-sm font-light text-gray-700">
                {
                    Object.entries(list).map( item => {
                        // item[0] --> name
                        // item[1] --> img src

                        return (
                            <p key={item[0]} className='flex items-center flex-gap-2 my-4'>
                                <input className='w-3' type="checkbox" value={item[0]} id={item[0]} onChange={(value) => onChange({ name: value.target.id , checked: value.target.checked })}/>
                                <label htmlFor={item[0]} className='block w-full flex items-center'>
                                    <span className='mx-4'> { item[0].toUpperCase() } </span>
                                    {
                                        item[1] &&
                                        <img src={item[1]} alt="" className='filterIcons' /> 
                                    }
                                </label>
                            </p>
                        )
                    } )
                }
            </div>
        </div>
    )
}

export default FilterCollections