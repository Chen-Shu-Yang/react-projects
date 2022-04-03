import React, { useState, useEffect } from 'react'
import Loading from './Loading'
import Tours from './Tours'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tours-project'
function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  
  // remove tour function
  // function is written here as the raw array of data is here, so its not okay for it to be 
  // in Tours or Tour component as data is Tours componenet is altered, 
  // while data in Tour component is only one 
  // (but the function is called in Tour Component as it is where the id is located)
  const removeTour = (id) => {
    // Transfer those that does not fit the filter to a new array
    const newTours = tours.filter((tour) => tour.id !== id);
    setTours(newTours);
  }

  const fetchTours = async () => {
    setLoading(true);

    // fetch data from the url
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
      console.log(tours);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  // call fetchTours() once when page loads
  useEffect(() => {
    fetchTours();
  }, []);

  if (loading) {
    return (
      <main>
        <Loading />
      </main>);
  }

  if (tours.length === 0) {
    return (
      <main>
        <div className='title'>
          <h2>No Tours Left</h2>
          <button className='btn' onClick={fetchTours}>refresh</button>
        </div>
      </main>
    )
  }

  // tours={tours} passes the array of data to Tours Component

  // removeTour function is passed into the Tours Component as its props
  // and later into Tour function as its props and for it to be used with the id as its argument
  // no need for an arrow function when passing functions in as a prop
  return (
    <main>
      <Tours tours={tours} removeTour={removeTour} />
    </main>
  );
}

export default App
