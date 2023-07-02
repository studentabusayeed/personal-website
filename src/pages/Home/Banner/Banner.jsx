import React from 'react';
import banner1 from "../../../../public/banner.json"
import { Player } from '@lottiefiles/react-lottie-player';

const Banner = () => {
    const handleDownload = () => {
        const link = document.createElement('a');
        link.href = '../../../../public/resume.pdf';
        link.download = '/resume.pdf';
        link.click();
    }
    return (
        <div>
            <div className='flex items-center justify-center gap-32 bg-slate-700'>
                <div>
                    <h4 className='font-bold text-yellow-100 text-3xl mb-4'>Hello, I'm Abu Sayeed</h4>
                    <h5 className='font-bold text-yellow-100 text-2xl mb-4'>Front-end Developer</h5>
                    <button onClick={handleDownload} className='btn btn-warning btn-sm btn-wide'>Download Resume</button>
                    {/* <a href='../../../../public/resume.pdf' target='_blank'><button className="btn btn-secondary btn-sm btn-wide">Get Resume</button></a> */}
                </div>
                <div>
                    <Player autoplay loop src={banner1} style={{ height: '600px', width: '600px' }} > </Player>
                </div>
            </div>
        </div>
    );
};

export default Banner;