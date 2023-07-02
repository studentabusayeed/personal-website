import React, { useState } from 'react';
import Portfolio from './Portfolio';

const MenuPortfolio = () => {
    const [users, setUsers] = useState([]);
    fetch('portfolio.json')
        .then(res => res.json())
        .then(data => setUsers(data));
    return (
        <div className='bg-slate-700 pb-20'>
            <div className='pt-4 mx-32'>
                <h3 className='font-bold text-yellow-100 text-3xl mb-4'>Portfolio</h3>
            </div>
            <hr className='mb-8' />
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center my-5 p-10 rounded'>
                {
                    users.map(user => <Portfolio
                        key={user._id}
                        user={user}
                    ></Portfolio>)
                }
            </div>
        </div>
    );
};

export default MenuPortfolio;