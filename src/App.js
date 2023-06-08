import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import Cart from './Cart/Cart';
import Header from './Header/Header';
import Product from './Product/Product';
import { useEffect, useState } from 'react';
import { uiActions } from './store/UiSlice';
import Notification from './Notification/Notification';

let isInitial= true;
function App() {
  const dispatch= useDispatch()
 const showCart=  useSelector(state => state.ui.cartVisible);

 const cart= useSelector((state)=> state.cart)
const notification= useSelector(state => state.ui.notification)

const fetchData = async () => {
  dispatch(
    uiActions.showNotification({
      status: 'Pending',
      title: 'Fetching...',
      message: 'Fetching Data...',
    })
  );

  try {
    const response = await fetch('https://simple-crud-4c559-default-rtdb.firebaseio.com/cart.json');
    if (!response.ok) {
      throw new Error('Fetching Data Failed');
    }

    const data = await response.json();
    // Process the fetched data as needed

    dispatch(
      uiActions.showNotification({
        status: 'success',
        title: 'Success',
        message: 'Fetching Data Successfully',
      })
    );
  } catch (error) {
    dispatch(
      uiActions.showNotification({
        status: 'error',
        title: 'Error',
        message: 'Fetching Data Failed',
      })
    );
  }
};

useEffect(() => {
 
    
    fetchData();
 
}, []);
  

 useEffect(()=> {
  const sendCartData= async ()=> {
    dispatch(uiActions.showNotification({
      status: 'Pending',
      title: 'Sending...',
      message: 'sending Data...'
    }))
  const response= await fetch('https://simple-crud-4c559-default-rtdb.firebaseio.com/cart.json', {
    method: 'PUT',
    body: JSON.stringify(cart),
  });
  if(!response.ok){
    dispatch(uiActions.showNotification({
      status: 'error',
      title: 'Error',
      message: 'sending Data Failed',
    }))
  }
  

  dispatch(uiActions.showNotification({
    status: 'success',
    title: 'Success',
    message: 'sending Data successfully',
  }))

  }
  if(isInitial){
    isInitial= false;
    return
  }
  sendCartData().catch(error => {
    dispatch(uiActions.showNotification({
      status: 'error',
      title: 'Error',
      message: 'sending Data Failed',
    }))
  })
  
 },[cart, dispatch])
  return (
    <div className="App">
   {notification && (<Notification status={notification.status} title= {notification.title} message={notification.message}   />)}
    <Header />
    {showCart && <Cart />}
     <Product />
    </div>
  );
}

export default App;


