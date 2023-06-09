import React from 'react';
import Card from './Card.js';

const CardList = ({ candies }) => {
    const cardComponent = candies.map((user, i) => {
        return <Card id={candies[i].id} name={candies[i].name} description={candies[i].description} />
    })

return (
    <div>
        {cardComponent}
    </div>
);
}

export default CardList;