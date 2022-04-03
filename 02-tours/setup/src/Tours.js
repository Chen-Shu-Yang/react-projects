import React from 'react';
import Tour from './Tour';

// tours prop is the array of data
const Tours = ({ tours, removeTour }) => {
  /*
  {tours.map((tour) => {
    return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
  })}

  .map will create a new array(tour) with the results of calling a provided function (return ...)
  on every element in the calling array(tours)

  key is the unique identity of one component when there are repeated ones.
  in {...tour}, the '...' allows all the properties of the array to be accessed, and passed to the Tour component. 
  */

  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tours.map((tour) => {
          // removeTour function (aka prop) is passed into the Tour Component as its props
          return <Tour key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
