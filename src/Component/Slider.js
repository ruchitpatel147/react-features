import React, { Component } from 'react'
import ReactSlider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Slider(){
  const data = [
    {
      name:"a",
      price: 100,
      img: '../Images/1.png'
    },
    {
      name:"b",
      price: 200,
      img: '../Images/1.png'
    },
    {
      name:"c",
      price: 300,
      img: '../Images/1.png'
    }
  ]

    return (
      <div>
        <h2>Image slider</h2>
        <img src= { require('../Images/1.png')} width="10%" height="10%"/>
        <ReactSlider dots={true}
                     fade={true}
                     slidesToShow={2}
                     autoplay={false}
                     arrows={true}
                     marks={true}
                     autoplaySpeed={3000}>{data.map((a) => (
          <div className='slider'>
            <img src= {require('../Images/1.png')} width="100%" height="150px"/>
            <div style={{'text-align': 'left'}}>Name: {a.name}</div>
            <div>Price: {a.price}</div>
          </div>
        ))}</ReactSlider>
      </div>
    )
}

export default Slider