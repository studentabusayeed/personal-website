import React, { useEffect, useState } from 'react';
import './Portfolio.css';

const Portfolio = ({ user }) => {
    const { name, details, img, live, client, server } = user;
    console.log(user);

    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl rounded-lg">
                <figure><img className='img-port' src={img} alt="Shoes" /></figure>
                <div className="card-body bg-slate-900 text-white p-5">
                    <h2 className="card-title">{name}</h2>
                    <p className='font-semibold'>{details}</p>
                    <div className='flex justify-between text-primary font-semibold text-2xl'>
                        {
                            live && <a href={live}>Live Preview</a>
                        }
                        {
                            client && <a href={client}>Client</a>
                        }
                        {
                            server && <a href={server}>Server</a>
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;