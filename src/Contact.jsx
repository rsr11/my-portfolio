
const Contact = () => (
    <section className='mt-40' id='contact' >
        {/* <h1 className='text-5xl text-center font-bold mb-16'> */}
            {/* <span className=' after:content-[""] relative after:w-16 after:h-2 after:-bottom-5 after:left-12 after:rounded-md after:absolute after:bg-violet-700 '>Contact</span> */}
        {/* </h1> */}
        <p className='text-center text-lg sm:text-xl lg:mx-24 text-white'>Feel free to Contact me by submitting the form below and I will get back to you as soon as i get the message ☺️</p>
        <form action="https://formspree.io/f/xdoqojgw" method='POST' id='feedback' className='flex text-white flex-col mt-5 pageBg6 lg:w-[50vw] mx-auto bgPatter border-2 border-black shadow-black bg-white p-10 rounded-md shadow-lg'>
            <label htmlFor="name"  className='mb-3 font-semibold'>Name</label>
            <input type="text" autoComplete='off' required name='name' className='p-2 mb-5 rounded-md bg-[#535353] placeholder:text-[#191919] placeholder:font-semibold ' placeholder='Enter Your Name' id='name'  />
            <label htmlFor="email" className='mb-3 font-semibold'>Email</label>
            <input type="email" autoComplete='off' required name="email" id="email" placeholder='Enter Your Email' className='placeholder:font-semibold rounded-md bg-[#535353] placeholder:text-[#191919] p-2 mb-5' />
            <label htmlFor="message" className='mb-3 font-semibold'>Message</label>
            <textarea name="message" autoComplete='false' required id="message" cols="30" rows="6" className='placeholder:font-semibold rounded-md bg-[#535353] placeholder:text-[#191919] p-4 mb-5 resize-none' placeholder='Enter Your Message' ></textarea>
            <button type='submit' name='submit' className='py-3 text-sm w-40 px-0 font-semibold bg-[#08CB00] rounded-lg mt-0 text-black' >SUBMIT</button>
        </form>


    </section>
)

export default Contact
