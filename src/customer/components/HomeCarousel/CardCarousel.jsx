import React from 'react'
import AliceCarousel from 'react-alice-carousel'
import { CardCarouselData } from './CardCarouselData'
import "react-alice-carousel/lib/alice-carousel.css";


const items = CardCarouselData.map(
  (item) => (
    <img src={item.image} alt="" className='w-full h-auto cursor-pointer' />
  )
)

const CardCarousel = () => {

  return (
    <AliceCarousel
      autoPlay
      autoPlayInterval={2000}
      infinite
      touchTracking={false}
      disableButtonsControls  
      items={items}
    />
  )
}

export default CardCarousel