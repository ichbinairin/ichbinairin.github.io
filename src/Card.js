import React from 'react';

const Card = ({ name, description, image }) => {
    return (
        <div className='bg-washed-blue dib br3 pa3 ma2 grow bw2 shadow-5'>
           {/*} <img alt='candy' src={`pic${id}`} /> */}
            <div>
                <h2>{ name }</h2>
                <p>{ description }</p>
                {<img alt='candy' src= { image } />}
            </div>
        </div>
    );
}

export default Card;