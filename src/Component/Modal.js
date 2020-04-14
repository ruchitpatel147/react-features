import React , {useState} from 'react';
import Modal from 'react-modal'

Modal.setAppElement('#root');
function ModalComponent() {

  const [open, setOpen] = useState(false)

  const click = () => {
    setOpen(!open)
  }
  return (
    <div>
      <h1>Home page</h1>
      <button onClick={click}>Open modal</button>
      <Modal isOpen={open} onRequestClose={() => setOpen(false)} style={{overlay: {backgroundColor:'grey'}, content: {backgroundColor: 'orange'}}}>
        <h1>Hello</h1>
        <div>
          <button onClick={click}>Close</button>
        </div>
      </Modal>

    </div>
  )
}

export default ModalComponent