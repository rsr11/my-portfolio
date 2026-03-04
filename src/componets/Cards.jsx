// import React from 'react'

const Cards = () => {
  return (
    <>
    <h1 className="text-white text-3xl font-clash" >ON UPDATE --- 🪧</h1>
    <section className="py-10 my-10 rounded-xl pagBg flex [&_h1]:mb-5 justify-between px-10 " >
        
        <section className="" >
        <h1 className="text-white text-center font-tanker text-3xl">My-Interest</h1>
        <img src="images/my-interest.png" className="object-contain rounded-2xl border-4 border-white w-60" alt="" />
        {/* <button className="text-white text-center border-2 w-full mt-3 font-clash rounded-lg py-1 shadow-2xl shadow-red-600 font-semibold bg-red-600 border-white" >CLICK IT</button> */}
        </section>

        <section className="" >
        <h1 className="text-white text-center font-tanker text-3xl">My-Projects</h1>
        <img src="images/my-projects.png" className="object-contain rounded-2xl border-4 border-white w-60" alt="" />
                {/* <button className="text-white text-center border-2 w-full mt-3 font-clash rounded-lg py-1 font-semibold bg-black border-white" >CLICK IT</button> */}
        </section>

        <section>
        <h1 className="text-white text-center font-tanker text-3xl">My-Story</h1> 
        <img src="images/my-story.png" className="object-contain rounded-2xl border-4 border-white w-60" alt="" />
                {/* <button className="text-white text-center border-2 w-full mt-3 font-clash rounded-lg py-1 font-semibold bg-blue-600 border-white" >CLICK IT</button> */}
        </section>
    </section>
    </>
  )
}

export default Cards
