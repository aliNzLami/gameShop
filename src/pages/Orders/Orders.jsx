import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// helper
import { emailValidity } from "../../assets/helper/emailValidity";
import { phoneValidity } from '../../assets/helper/phoneValidity';

// context
import { RouteContext } from '../../assets/context/RouteContext';
import { InCartContext } from '../../assets/context/InCartContext';
import { OrdersContext } from '../../assets/context/OrdersContext';
import { ProfileContext } from '../../assets/context/ProfileContext';

// component
import Container from "../../components/Container";
import OrderForm from './OrderForm';
import TotalAmount from '../Cart/TotalAmount';
import { toast } from 'react-toastify';

function Orders() {

    const navigate = useNavigate();

    // ---------------------------------- Context ---------------------------------- //
    const { profile } = useContext(ProfileContext);
    const routesList = useContext(RouteContext);
    const { inCartItems, updateInCart } = useContext(InCartContext);
    const { ordersList, setLocalOrders, updateOrdersList } = useContext(OrdersContext);

    // ---------------------------------- States ---------------------------------- //
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


    // ---------------------------------- Functions ---------------------------------- //
    const check_emptiness = () => {
      for(let item in formState) {
        if(!formState[item]) {
          if(item == "firstName" || item == "lastName") {
            toast.error(`Name is empty.`);
          }
          else {
            toast.error(`${item} is empty.`);
          }
          return false;
        }
      }
      return true;
    }

    const check_validty = () => {
      const isFullForm = check_emptiness();
      
      if(isFullForm) {
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
      }
      else {
        return false;
      }
      return true;
    }

    const updateOrders = () => {
      const isValid = check_validty();
      if(isValid) {
        const finalData = {
          personalData: formState,
          orders: [...inCartItems]
        }
        let newOrders = [];
        if(ordersList) {
          newOrders = [...ordersList];
          newOrders.push(finalData);
        }
        updateOrdersList([...newOrders]);
        updateInCart([]);
        navigate(routesList.ordersList.url);
        toast.success("Payment was successfull.")
      }
    }

    const defaultForm = () => {
      const defaultInfo = profile;
      const newForm = {...formState};
      for(let item in newForm) {
        if(defaultInfo[item]) {
          newForm[item] = defaultInfo[item];
        }
      }
      setFormState({...newForm})      
    }

    // ---------------------------------- Effects ---------------------------------- //
    useEffect(() => {
      setLocalOrders();
      defaultForm()
    }, [])
    
    return (
      <Container>
        <div className='flex flex-col md:flex-row justify-between items-center gap-4 pt-5 sm:pt-5 sm:pt-14 min-h-[80vh] mainBorder-t'>
          <OrderForm 
            formState={formState} 
            setFormState={setFormState}
          />

          <div className="w-[300px] mt-10 md:mt-0 ">
            <TotalAmount 
              navigateTitle={"PROCEED TO PAYMENT"}
              onClickBtn={updateOrders}
            />
          </div>
        </div>
      </Container>
    )
}

export default Orders