import React, { useState } from 'react'
import Title from "../../components/Collection/Title";

function OrderForm({ formState, setFormState }) {

    const formConten = [
        {
          id: "firstName",
          isFull: false,
          label: "First Name"
        },
  
        {
          id: "lastName",
          isFull: false,
          label: "Last Name"
        },
  
        {
          id: "email",
          isFull: true,
          label: "Email Address",
          type: "email"
        },
  
        {
          id: "street",
          isFull: true,
          label: "Street"
        },
  
        {
          id: "city",
          isFull: false,
          label: "City"
        },
  
        {
          id: "state",
          isFull: false,
          label: "State"
        },

        {
            id: "zip",
            isFull: false,
            label: "Zipcode"
        },

        {
            id: "country",
            isFull: false,
            label: "Country"
        },

        {
            id: "phone",
            isFull: true,
            label: "Phone",
            type: "number"
        },
    ]

    const onChangeHandle = (input) => {
        const newStates = {...formState};
        newStates[input.key] = input.value;
        setFormState({...newStates});
    }

    return (
        <>
          <div className="flex flex-col gap-4 w-ful sm:max-w-[400px]">
            
            <div className="text-xl sm:text-2xl my-3">
              <Title 
                text1='DELIVERY'
                text2='INFORMATION'
              />
            </div>

            <div className="max-w-3xl mx-auto">
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {
                  formConten.map(item => {
                    return (
                      <div key={item.id} className={`flex flex-col ${ item.isFull ? "md:col-span-2" : "" }`}>
                        <label htmlFor={item.id} className="text-sm font-medium"> { item.label } </label>
                        <input 
                            onChange={(e) => onChangeHandle({key: item.id, value: e.target.value})} 
                            type={item.type ? item.type : "text"} 
                            id={item.id} 
                            className="mt-1 p-2 border rounded" 
                            defaultValue={formState[item.id]}
                        />
                      </div>
                    )
                  })
                }
              </form>
            </div>

          </div>  
        </>
    )
}

export default OrderForm