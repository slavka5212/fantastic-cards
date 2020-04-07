import React from 'react';

import './card.styles.css';

export const Card = props => (
  <div className='card-container'>
    <img
      alt='person'
      src={`https://robohash.org/2${props.person.id}?set=set4&size=180x180`}
    />
    <h2> {props.person.name} </h2>
  </div>
);
