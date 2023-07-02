import React from 'react';
import img from '../../../public/sayeed-banner.png'
import './About.css';

const About = () => {
    return (
        <div className='bg-slate-700 pb-20'>
            <div>
                <div className='pt-4 mx-32'>
                    <h3 className='font-bold text-yellow-100 text-3xl mb-4'>About me</h3>
                </div>
                <hr className='mb-8' />
                <div className='flex justify-center gap-20'>
                    <div className='w-1/2'>
                        <div>
                            <h3 className='font-semibold text-yellow-100 text-3xl mb-1 mt-8'>Front End Developer</h3>
                            <hr className='w-6/12' />
                            <h4 className='text-1xl font-bold text-cyan-200 mt-4'>Highly motivated and dedicated Frontend Developer with a strong focus on the React framework. With adeep understanding of React's component-based architecture and virtual DOM, I have successfully developed and delivered dynamic and responsive web applications.</h4>
                        </div>
                        <div>
                            <h3 className='font-semibold text-yellow-100 text-3xl mb-1 mt-8'>Personal Information</h3>
                            <hr className='w-6/12' />
                            <h4 className='text-1xl font-bold text-cyan-200 mt-1'>Name: Abu Sayeed</h4>
                            <h4 className='text-1xl font-bold text-cyan-200 mt-1'>Phone: +880 1874325678</h4>
                            <h4 className='text-1xl font-bold text-cyan-200 mt-1'>Email: studentabusayeed2@gmail.com</h4>
                            <h4 className='text-1xl font-bold text-cyan-200 mt-1'>Address: Chittagong, Bangladesh</h4>
                        </div>
                    </div>
                    <div className='w-3/12'>
                        <img className='about-img' src={img} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;