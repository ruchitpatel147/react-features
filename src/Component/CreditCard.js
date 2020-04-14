import React, { useState } from 'react'
import CreditCards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css'

function CreditCard (){

  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvc, setCvc] = useState('')
  const [focus, setFocus] = useState('')
  return (
    <div>
      <CreditCards
      number={number}
      name={name}
      expiry={expiry}
      cvc={cvc}
      focused={focus}/>
      <form>
        <input type='text' name='number' value={number} placeholder='Card Number' onChange={(e) => setNumber(e.target.value)} onFocus={(e) => {setFocus(e.target.name)}}/>
        <input type='text' name='name' value={name} placeholder='Card Name' onChange={(e) => setName(e.target.value)}  onFocus={(e) => {setFocus(e.target.name)}}/>
        <input type='text' name='expiry' value={expiry} placeholder='Card expiry' onChange={(e) => setExpiry(e.target.value)} onFocus={(e) => {setFocus(e.target.name)}}/>
        <input type='text' name='cvc' value={cvc} placeholder='Card cvc' onChange={(e) => setCvc(e.target.value)} onFocus={(e) => {setFocus(e.target.name)}}/>
      </form>
    </div>
  )
}

export default CreditCard