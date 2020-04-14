import React, { Component } from 'react'
import {BarLoader, BounceLoader, BeatLoader} from 'react-spinners'

function LoadingIndicator() {
  return (
    <div>
      <h1>Loading</h1>
      <BarLoader color='red' loading />
      <BounceLoader loading/>
      <BeatLoader loading/>
    </div>
  )
}

export default LoadingIndicator