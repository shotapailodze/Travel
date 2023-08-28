import React from 'react'
import CardItem from './CardItem'


function Cards() {
  return (
    <div className='cards'>
        <h1>Check out these Epic Destinations!</h1>
        <div className="cards__container">
            <div className="cards__wrapper">
                <ul className="cards__items">
                    <CardItem
                    src='/src/assets/images/img-9.jpg'
                    text='Explore the hidden waterfall deep inside Amazon jungle'
                    label='Adventure'
                    path='/services'
                     />
                     <CardItem
                        src='/src/assets/images/img-2.jpg'
                        text='Travel through the Islands of Bali in a Private Cruise'
                        label='Luxury'
                        path='/services'
                    />
                </ul>
                <ul className='cards__items'>
                    <CardItem
                    src='/src/assets/images/img-3.jpg'
                    text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
                    label='Mystery'
                    path='/services'
                    />
                    <CardItem
                    src='/src/assets/images/img-4.jpg'
                    text='Experience Football on Top of the Himilayan Mountains'
                    label='Adventure'
                    path='/products'
                    />
                    <CardItem
                    src='/src/assets/images/img-8.jpg'
                    text='Ride through the Sahara Desert on a guided camel tour'
                    label='Adrenaline'
                    path='/signup'
                    />
                        </ul>
            </div>
        </div>
    </div>
  )
}

export default Cards