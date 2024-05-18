import React from 'react'
import java from "../../public/java.png"
import python from "../../public/python.webp"
import mongo from "../../public/mongodb.jpg"
import express from "../../public/express.png"
import node from "../../public/node.png"
import react from "../../public/reactjs.png"


const Experiance = () => {
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
    <div name="Experiance" className='max-w-screen-2xl container mx-auto px-4 md:px-20 mt-20'>
        <div>
            <h1 className='text-3xl font-bold mb-5'>Experiance</h1>
            <span className='underline font-semibold'> I have more than 2 years experince</span>
            <div className='grid grid-cols-2 md:grid-cols-5 gap-7 my-3'>
                {
                    cardItems.map(({id,logo,name})=>(
                        <div className=' flex flex-col items-center justify-center border-[2px] rounded-full p-1 cursor-pointer hover:scale-110 duration-300' key={id}>
                            <img src={logo} className='w-[120px]   p-1 rounded-full border-[2px]' alt="" />
                            <div>
                                <div className='font-bold px-2 text-xl mb-2'>{name}</div>
                               
                            </div>
                           
                            
                            </div>
                    ))}
            </div>
        </div>
      

    </div>
  )
}

export default Experiance




