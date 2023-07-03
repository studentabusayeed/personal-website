import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_4gfs6m8', 'template_rzuzpr4', form.current, 'vILRED8EfnOncNpKn')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className='bg-slate-700 h-screen'>
            <div className='pt-4 md:mx-32 mx-24'>
                <h3 className='font-bold text-yellow-100 text-3xl mb-4'>Contact me</h3>
            </div>
            <hr className='mb-8' />
            <div>
                <div className='md:mx-32 mx-24'>
                    <h4 className='font-bold text-yellow-100 text-3xl mb-4'>Let's Talk</h4>
                </div>
                <div className="md:mx-96 mx-4">
                    <form ref={form} onSubmit={sendEmail}>
                        <label className='font-semibold text-white mr-2'>Name</label>
                        <input className='block w-full py-2' type="text" name="user_name" />
                        <label className='font-semibold text-white mr-2'>Email</label>
                        <input className='block w-full py-2' type="email" name="user_email" />
                        <label className='font-semibold text-white mr-2'>Message</label>
                        <textarea className='block w-full py-4' name="message" />
                        <input className='bg-yellow-600 py-2 px-8 rounded mt-4' type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;