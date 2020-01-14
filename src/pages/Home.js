import React, {useState, useEffect} from 'react';

const Home = () => {
  const [coffeeShops, setCoffeeShops] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const REACT_APP_BACKEND_URL = "enter url here";
      const response = await fetch(REACT_APP_BACKEND_URL);
      const data = await response.json();
      // console.log(data);
      setCoffeeShops([
        ...coffeeShops,
        ...data
      ]);
    }
    fetchData();
  }, []);

  
  return (
    <>
        <p>Home</p>
        {/* <HomeHeroBanner /> */}
        <h1>Latest Reviews</h1>
        <div>
            {/* {map and call the components for each one, passing in the review object} */}
        </div>
    </>
  )
};

export default Home;