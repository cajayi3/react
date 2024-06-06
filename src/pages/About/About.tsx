import React from 'react';
import './About.css'
import Background from '../../assets/images/smoke.jpg';

const About: React.FC = () => {
    return(
        <div className='para' style={{ backgroundImage: `url(${Background})`}}>
            <h1 className='heading'>About</h1>
            <hr className='line'/>
            <div className='container'>
                <p>
                    The Refranchisement and elegance of luxury vehicles in the United States of America.
                    Ready to provide you services since 1978 in California,Texas and Atlanta.
                    The upper echelon of designing to perfection everything is taken with time and precision.
                    All vehicles from V-6 to V-12 from France, Germany, US and Japan.
                    New or Pre-owned vehicles all qualified for quality, with sales taxation being lowest of the low at 6.25%.
                </p>
            </div>
        </div>
    );
};

export default About;