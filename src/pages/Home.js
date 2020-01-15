import React, {useState, useEffect} from 'react';
import Navbar from '../components/Navbar';
import HomeHeroBanner from '../components/HomeHeroBanner';
import { Link } from 'react-router-dom';
import ReviewCard from '../components/ReviewCard.jsx'

const Home = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const REACT_APP_BACKEND_URL = "https://coffee-back-end.herokuapp.com";
      const response = await fetch(REACT_APP_BACKEND_URL);
      const data = await response.json();
      // console.log(data);
      setReviews([
        ...reviews,
        ...data
      ]);
    }
    fetchData();
  }, []);

  return (
    <>
        <HomeHeroBanner />
        <h1>Latest Reviews</h1>
        <div className="reviewBar">
        {reviews.map((review) => {
          const theReview = review.review
          return (
            <div >
              <ReviewCard theReview={theReview}/>
            </div>
          )
        })}
        </div>
    </>
  )
};

export default Home;