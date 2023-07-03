import React from 'react';
import banner1 from "../../../../public/banner.json"
import { Player } from '@lottiefiles/react-lottie-player';
import './Banner.css';

const Banner = () => {
    const handleDownload = () => {
        const anchor = document.createElement('a');
        anchor.href = '../../../../public/resume1.pdf';
        anchor.download = 'Abu Sayeed (Resume).pdf';
        anchor.click();
    }
    return (
        <div>
            <div className='md:flex items-center justify-center bg-slate-700 h-screen'>
                <div className='md:mx-32 hello'>
                    <h4 className='font-bold text-yellow-100 text-3xl mb-4'>Hello, I'm Abu Sayeed</h4>
                    <h5 className='font-bold text-yellow-100 text-2xl mb-4'>Front-end Developer</h5>
                    <button onClick={handleDownload} className='btn btn-warning btn-sm btn-wide'>Download Resume</button>
                    {/* <a href='../../../../public/resume.pdf' target='_blank'><button className="btn btn-secondary btn-sm btn-wide">Get Resume</button></a> */}
                </div>
                <div className='w-1/2 mx-auto'>
                    <div className='w-full md:w-[600px] img-animation'>
                        <Player className='' autoplay loop src={banner1} > </Player>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;