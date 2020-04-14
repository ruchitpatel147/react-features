import React, { Component } from 'react'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
toast.configure();
const CustomToast = ({closeToast1}) => {
  return (
    <div>
      <div>Hello</div>
      <button onClick={closeToast1}>close</button>
    </div>
  )
}

function Toast(){

  const notify = () => {
    toast('Basic', {position: toast.POSITION.TOP_CENTER, autoClose: 1000});
    toast.success('Basic', {position: toast.POSITION.TOP_LEFT});
    toast.error('Basic', {position: toast.POSITION.TOP_RIGHT});
    toast.info('Basic', {position: toast.POSITION.BOTTOM_CENTER});
    toast.warn('Basic', {position: toast.POSITION.BOTTOM_LEFT});
    toast.error(<CustomToast/>, {position: toast.POSITION.BOTTOM_RIGHT});
  }

  return (
    <div>
        <button onClick = {notify}>Notify!</button>
    </div>
  )
}

export default Toast