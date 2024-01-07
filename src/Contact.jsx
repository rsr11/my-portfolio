import React from 'react'

const Contact = () => (
    <section className='mt-40' id='contact' >
        <h1 className='text-5xl text-center font-bold mb-16'>
            <span className=' after:content-[""] relative after:w-16 after:h-2 after:-bottom-5 after:left-12 after:rounded-md after:absolute after:bg-violet-700 '>Contact</span>
        </h1>
        <p className='text-center text-xl lg:mx-24 text-slate-600'>Feel free to Contact me by submitting the form below and I will get back to you as soon as i get the message🙂</p>
        <form action="https://formspree.io/f/xdoqojgw" method='POST' id='feedback' className='flex flex-col mt-20 lg:w-[50vw] mx-auto bgPatter border-2 border-black shadow-black bg-white p-10 rounded-md shadow-lg'>
            <label htmlFor="name"  className='mb-3 font-semibold'>Name</label>
            <input type="text" autoComplete='off' required name='name' className='p-4 mb-5 bg-[#F9F5EB] placeholder:text-gray-600 placeholder:font-semibold ' placeholder='Enter Your Name' id='name'  />
            <label htmlFor="email" className='mb-3 font-semibold'>Email</label>
            <input type="email" autoComplete='off' required name="email" id="email" placeholder='Enter Your Email' className='placeholder:font-semibold bg-[#F9F5EB] p-4 mb-5 placeholder:text-gray-600' />
            <label htmlFor="message" className='mb-3 font-semibold'>Message</label>
            <textarea name="message" autoComplete='false' required id="message" cols="30" rows="10" className='placeholder:font-semibold bg-[#F9F5EB] p-4 mb-5 resize-none placeholder:text-gray-600' placeholder='Enter Your Message' ></textarea>
            <button type='submit' name='submit' className='py-4 w-40 px-10 text-lg font-semibold bg-violet-700 hover:bg-violet-600 rounded-lg mt-8 text-white' >SUBMIT</button>
        </form>


    </section>
)

export default Contact
