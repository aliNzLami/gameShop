import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router';

// helper
import { emailValidity } from '../../assets/helper/emailValidity';

// context
import { RouteContext } from '../../assets/context/RouteContext';
import { ProfileContext } from '../../assets/context/ProfileContext';

// component
import { toast } from 'react-toastify';



function Login() {

    const navigate = useNavigate();

    // ------------------------ Context ----------------------- //
    const routesList = useContext(RouteContext);
    const { updateProfile } = useContext(ProfileContext) || {};
    
    
    // ------------------------ Content ----------------------- //
    const singUpContent = [
      {
        placeholder: "First Name",
        id: "firstName",
      },
      {
        placeholder: "Last Name",
        id: "lastName",
      },
      {
        placeholder: "Email",
        id: "email",
        type: "email"
      },
      {
        placeholder: "Phone",
        id: "phone",
        type: "number"
      },
      {
        placeholder: "Password",
        id: "password",
        type: "password"
      },
    ]
    const loginContent = [
      {
        placeholder: "Email",
        id: "email",
        type: "email"
      },
      {
        placeholder: "Password",
        id: "password",
        type: "password"
      },
    ]

    // ------------------------ State ----------------------- //
    const [currentState, setCurrentState] = useState({
      signUp: { name: "Sign Up", active: false },
      login: { name: "Login", active: true },
    });

    const [form, setForm] = useState({
      name: "",
      email: "",
      phone: "",
      password: ""
    })

    // ------------------------ Function ------------------------ //

    const onChangeHandler = (input) => {
      const newForm = {...form};
      newForm[input.key] = input.value;
      setForm({...newForm});
    }

    const toggleHandler = (status) => {
      const newStates = {...currentState};
      for(let item in newStates) {
        newStates[item].active = false;
      }
      newStates[status].active = true;
      setCurrentState({...newStates}); 
    }

    const checkValid = () => {
      const validEmail = emailValidity(form.email);
      if(!validEmail.status) {
        toast.error(validEmail.text);
        return false;
      }
      if(!form.password) {
        toast.error("Enter Your Password");
        return false;
      }
      if( form.password.length < 5 ) {
        toast.error("Password must have at least 5 characters.");
        return false;
      }
      return true
    }

    const signHandler = () => {
      const isValid = checkValid();
      if(isValid) {
        updateProfile(form);
        toast.success("Welcome");
        navigate(routesList.home.url);
        window.location.reload()
      }
    } 

    return (
      <>
        <div className='flex flex-col justify-center items-center w-[90%] sm:max-w-96 m-auto gap-4 text-gray-800 minH500'>
          <div className='inline-flex items-center gap-2 mb-2'>
            <h1 className='prata-font text-3xl' data-testid='loginHeader'>
              { currentState.signUp.active ? currentState.signUp.name : currentState.login.name  }
            </h1>
            <hr className='border-none h-[1.5px] w-8 bg-gray-800' />
          </div>

          {
            currentState.signUp.active
            ?
              <>  
                {
                  singUpContent.map(item => {
                    return (
                      <input 
                        onChange={(e)=> onChangeHandler({key: item.id, value: e.target.value})}
                        key={item.id}
                        type={item.type ? item.type : "text"}
                        className='w-full px-3 py-2 mainBorder' 
                        placeholder={item.placeholder}
                        id={item.id} 
                      />
                    )
                  })
                }
                <button onClick={signHandler} className='mainPurpleBg text-white cursor-pointer px-4 py-2 rounded' data-testid='signUpBtn_color'>
                  { currentState.signUp.name }
                </button>

                <p onClick={() => toggleHandler("login")} className='text-md text-gray-700 cursor-pointer mt-4' data-testid='loginBtn_transparent'>
                  { currentState.login.name }
                </p>
              </>
            :
              <>  

                {
                  loginContent.map(item => {
                    return (
                      <input 
                        onChange={(e)=> onChangeHandler({key: item.id, value: e.target.value})}
                        key={item.id}
                        type={item.type ? item.type : "text"}
                        className='w-full px-3 py-2 mainBorder' 
                        placeholder={item.placeholder}
                        id={item.id} 
                      />
                    )
                  })
                }

                <button onClick={signHandler} className='mainPurpleBg text-white cursor-pointer px-4 py-2 rounded' data-testid='loginBtn_color'>
                  { currentState.login.name }
                </button>

                <p onClick={() => toggleHandler("signUp")} className='text-md text-gray-700 cursor-pointer mt-4' data-testid='signUpBtn_transparent'>
                  { currentState.signUp.name }
                </p>
              </>
          }
        </div>
      </>
    )
}

export default Login