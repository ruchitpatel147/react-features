import React, { useRef, useState } from 'react'
import ReactIdleTimer from 'react-idle-timer';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function IdleTimer (){
  const [isloggedIn , setLoggin] = useState(true);
  const [open , setModal] = useState(false);
  const ref = useRef();
  const sessionRef = useRef();

  const onIdle = () => {
    setModal(!open)
    sessionRef.current = setTimeout(() => {
      setModal(false)
      setLoggin(false )
    }, 5000)
  }

  return (
    <div>
      {
        isloggedIn? <h2>Hello ruchit</h2>: <h2>Hello guest</h2>
      }
      <Modal isOpen={open} onRequestClose={() => setModal(false)}>
        <h2>You have been idle for a while</h2>
        <p>You will logout soon</p>
        <div>
          <button onClick={() => setModal(false)}>Log Out</button>
          <button onClick={() => { setModal(false); setLoggin(true)}}>Stay login</button>
        </div>
      </Modal>
      <h1>Idle Timer</h1>
      <ReactIdleTimer ref={ref} timeout={5000} onIdle={onIdle}/>
    </div>
  )
}

export default IdleTimer