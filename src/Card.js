import React from 'react';
import { candies } from './candies'

const Card = ({ name, description, id }) => {
   const imageProd = candies.filter(item => item.id===id)
   
    return (
        <div className='bg-washed-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
            <div>
                <img className="candy-icon" width={ 100 } alt='candy' src={ imageProd[0].image } />
                <h2>{ name }</h2>
                <p>{ description }</p>
                
            </div>
        </div>
    );
}

export default Card;