import React from 'react';

const Contact = () => {
    return (
        <div className='bg-slate-700 pb-20'>
            <div className='pt-4 mx-32'>
                <h3 className='font-bold text-yellow-100 text-3xl mb-4'>Contact me</h3>
            </div>
            <hr className='mb-8' />
            <div>
                <div className='mx-32'>
                    <h4 className='font-bold text-yellow-100 text-3xl mb-4'>Let's Talk</h4>
                </div>
                <div className="w-1/2 mx-24">
                    <div className="flex-col lg:flex-row-reverse">
                        <div className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Name</span>
                                </label>
                                <input type="text" placeholder="name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-white">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" />
                            </div>
                            <div>
                                <label className="label">
                                    <span className="label-text text-white">Textarea</span>
                                </label>
                                <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
                            </div>
                            <div className="form-control mt-6 w-1/2">
                                <button className="btn btn-primary">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;