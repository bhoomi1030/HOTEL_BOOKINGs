import React from 'react';
import Title from './Title';
import { testimonials } from '../assets/assets'; // Assuming testimonials data is imported from assets
import StarRating from './StarRating';
const Testimonial = ({ testimonial }) => {
    return (
        <div className = 'flex flex-col items-centre px-6 md:px-16 lg:px-24 xl:px-32 pt-20 pb-32 bg-slate-50'>
            <Title title = "What Our Guests Say" subTitle = "Hear from our satisfied guests who have experienced the luxury and comfort of our exclusive hotels and resorts." />
             <div className="flex flex-col items-center px-6 md:px-16 lg:px-24 pt-20 pb-30">
            <div className="flex flex-col justify-center items-center text-center">
                <h1 className="text-4xl md:text-[40px] font-bold">Customer Testimonials</h1>
                <p className="text-sm md:text-base text-gray-500/90 mt-2 max-w-[696px]">Hear what our users say about us. We're always looking for ways to improve. If you have a positive experience with us, leave a review.</p>
            </div>

            <div className="flex flex-wrap items-center justify-center gap-6 mt-20 mb-10">
                {testimonials.map((testimonial) => (
                    <div key={testimonial.id} className="bg-white p-6 rounded-xl shadow ">
                        <div className="flex items-center gap-3">
                            <img className="w-12 h-12 rounded-full" src={testimonial.image} alt={testimonial.name} />
                            <div>
                                <p className="font-playfair text-xl">{testimonial.name}</p>
                                <p className="text-gray-500">{testimonial.address}</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-1 mt-4">
                           <StarRating />
                        </div>
                        <p className="text-gray-500 max-w-90 mt-4">"{testimonial.review}"</p>
                    </div>
                ))}
            </div>
            </div>
</div>
    )}
export default Testimonial;