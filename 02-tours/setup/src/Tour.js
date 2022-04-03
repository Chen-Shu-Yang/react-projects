import React, { useState } from 'react';

// props passed from {...tour}, every property in the array of objects
const Tour = ({id, image, info, price, name, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  return (
  <article className='single-tour'>
      <img src={image} alt={name} />
      <footer>
        <div className='tour-info'>
          <h4>{name}</h4>
          <h4 className='tour-price'>${price}</h4>
        </div>
        <p>{readMore ? info : `${info.substring(0, 200)}...`}
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? 'show less' : 'read more'}
        </button>
        </p>
        <button className='delete-btn' onClick={() => removeTour(id)}>Not Interested</button>
      </footer>
    </article>
    );
};

/*
  <button className='delete-btn' onClick={() => removeTour(id)}>Not Interested</button>

  functions(removeTour()) can also be passed into a component as props
  be sure to use arrow function when there is an argument
*/

export default Tour;
