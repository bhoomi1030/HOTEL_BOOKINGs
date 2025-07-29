import React from 'react';
import Hero from '../components/hero';
import FeaturedDestination from '../components/FeaturedDestination';
import ExclusiveOffers from '../components/Exclusiveoffers'; // <-- Add this line
import Testimonial from '../components/Testimonial';
import NewsLetter from '../components/NewsLetter';

const Home = () => {
    return (
        <>
            <Hero />
            <FeaturedDestination />
            <ExclusiveOffers />
            <Testimonial />
            <NewsLetter />
          
        </>
    )
}
export default Home;