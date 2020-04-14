import React, { Component } from 'react'
import ReactVideoPlayer from 'react-player'

function VideoPlayer (){
    return (
      <div style={{'text-align': 'center'}}>
        <h1>Video Player</h1>
        <ReactVideoPlayer controls url='https://www.youtube.com/watch?v=7sDY4m8KNLc&list=PLC3y8-rFHvwhAh1ypBvcZLDO6I7QTY5CM&index=12&pbjreload=10'/>
      </div>
    )
}

export default VideoPlayer