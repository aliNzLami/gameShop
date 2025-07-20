import React, { useState, useEffect, useContext } from 'react'

// context
import { ProfileContext } from '../../assets/context/ProfileContext';

// helper
import { emailValidity } from "../../assets/helper/emailValidity";
import { phoneValidity } from '../../assets/helper/phoneValidity';

// component
import { toast } from 'react-toastify';


function Profile() {

    const { profile, updateProfile } = useContext(ProfileContext);

    const profileContent = [
      {
        id: "firstName",
        placeholder: "First Name"
      },

      {
        id: "lastName",
        placeholder: "Last Name"
      },

      {
        id: "email",
        placeholder: "Email Address",
        type: "email"
      },

      {
        id: "street",
        placeholder: "Street"
      },

      {
        id: "city",
        placeholder: "City"
      },

      {
        id: "state",
        placeholder: "State"
      },

      {
          id: "zip",
          placeholder: "Zipcode"
      },

      {
          id: "country",
          placeholder: "Country"
      },

      {
          id: "phone",
          placeholder: "Phone",
          type: "number"
      },
  ]

    const [formState, setFormState] = useState({
        firstName: "",
        lastName: "",
        email: "",
        street: "",
        city: "",
        state: "",
        zip: "",
        country: "",
        phone: ""
    })

    const [canEdit, setCanEdit] = useState(false);

    const updateProfileFirst = () => {
      const newFormState = {...formState};
      for(let item in profile) {
        newFormState[item] = profile[item];
      }
      setFormState({...newFormState});
    }

    const editHandler = (input) => {
      const newFormState = {...formState};
      newFormState[input.key] = input.value;
      setFormState({...newFormState});
    }

    const checkValid = () => {
      const validEmail = emailValidity(formState.email);
      const validPhone = phoneValidity(formState.phone);
      if(!validEmail.status) {
        toast.error(validEmail.text);
        return false;
      }
      if(!validPhone.status) {
        toast.error(validPhone.text);
        return false;
      }
      return true
    }

    const submitHandler = () => {
      const isValid = checkValid();
      if(isValid) {
        updateProfile(formState)
        setCanEdit(!canEdit);
        toast.success("Profile Updated.")
      }
    }

    useEffect(() => {
      updateProfileFirst();
    }, [])
    
    return (
        <div className='flex flex-col justify-center items-center w-[90%] sm:max-w-96 m-auto gap-4 text-gray-800 minH500'>
          <div className='inline-flex items-center gap-2 mb-2'>
            <p className='prata-font text-3xl'>
              Profile
            </p>
            <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
          </div>

                {
                  profileContent.map(item => {
                    return (
                      <input 
                        onChange={(e)=> editHandler({key: item.id, value: e.target.value})}
                        key={item.id}
                        type={item.type ? item.type : "text"}
                        className='w-full px-3 py-2 mainBorder' 
                        placeholder={item.placeholder}
                        id={item.id} 
                        disabled={!canEdit}
                        defaultValue={formState[item.id]}
                      />
                    )
                  })
                }
                
                {
                  canEdit
                  ?
                    <button onClick={submitHandler} className='mainPurpleBg text-white cursor-pointer px-4 py-2 rounded'>
                      Submit
                    </button>
                  :
                    <button onClick={() => setCanEdit(!canEdit)} className='mainPurpleBg text-white cursor-pointer px-4 py-2 rounded'>
                      Edit
                    </button>
                }

                
        </div>
    )
}

export default Profile