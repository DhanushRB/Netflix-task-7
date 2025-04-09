import React from 'react';
import movie1 from '../components/img/movie1.jpeg';
import movie2 from '../components/img/movie2.jpg';
import movie3 from '../components/img/movie3.webp';
import movie4 from '../components/img/movie4.jpeg';
import movie5 from '../components/img/movie5.jpg';


const movies = () => {
    return (
        
        <div className='movie-sec'>
            <h1>Trending Now</h1>
            <div className='movie-con'>
            <div className='box'>
                <img src={movie1} />
            </div>
            <div className='box'>
                <img src={movie2} />
            </div>
            <div className='box'>
                <img src={movie3} />
            </div>
            <div className='box'>
                <img src={movie4} />
            </div>
            <div className='box'>
                <img src={movie5} />
            </div>
        </div>
        <h3 className='movie-head'>A plan to suit you needs</h3>

        <div className='price-con'>
            <div className='box1'>
                <h3>Mobile</h3>
                <li>Fair video quality</li>
                <li>For your phone or tablet</li>
                <br />
                <h3>Rs 149/ mo</h3>
            </div>
            <div className='box2'>
                <h3>Mobile</h3>
                <li>Fair video quality</li>
                <li>For your phone or tablet</li>
                <br />
                <h3>Rs 149/ mo</h3>
            </div>
            <div className='box3'>
                <h3>Mobile</h3>
                <li>Fair video quality</li>
                <li>For your phone or tablet</li>
                <br />
                <h3>Rs 149/ mo</h3>
            </div>
            <div className='box4'>
                <h3>Mobile</h3>
                <li>Fair video quality</li>
                <li>For your phone or tablet</li>
                <br />
                <h3>Rs 149/ mo</h3>
            </div>
        </div>
            
        
    </div>
    );
    
}

export default movies;