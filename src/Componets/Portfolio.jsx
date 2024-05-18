import React from 'react'
import java from "../../public/java.png"
import python from "../../public/python.webp"
import mongo from "../../public/mongodb.jpg"
import express from "../../public/express.png"
import node from "../../public/node.png"
import react from "../../public/reactjs.png"


const Portfolio = () => {
    const cardItems=[
        {
            id:1,
            logo:mongo,
            name:"MongoDb"
        },
     
        {
            id:2,
            logo:node,
            name:"Nodejs"
        },
        {
            id:3,
            logo:express,
            name:"Express"
        },
        {
            id:4,
            logo:react,
            name:"Reactjs"
        },
        {
            id:5,
            logo:java,
            name:"Java"
        },
        {
            id:6,
            logo:python,
            name:"python"
        },
    ]
  return (
    <div name="Portfolio" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-20'>
        <div>
            <h1 className='text-3xl font-bold mb-5'>Portfolio</h1>
            <span className='underline font-semibold'>Featured Products</span>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-7 my-6'>
                {
                    cardItems.map(({id,logo,name})=>(
                        <div className='md:w-[260px] md:h-[260px] border-[2px] rounded-lg shadow-lg p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                            <img src={logo} className='w-[100px] h-[100px] p-1 rounded-full border-[2px]' alt="" />
                            <div>
                                <div className='font-bold px-2 text-xl mb-2'>{name}</div>
                                <p className='px-2 text-fray-700'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                            <div className=' flex space-x-4 justify-around mt-5'>
                                <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded'>video</button>
                                <button className='bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded'>SourceCode</button>
                            </div>
                                
                            
                            </div>
                    ))}
            </div>
        </div>
      

    </div>
  )
}

export default Portfolio



