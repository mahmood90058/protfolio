import React from 'react'
import { useForm } from "react-hook-form"
import axios  from 'axios'
import {toast} from "react-hot-toast"



const Contact = () => {
    const {
        register,
        handleSubmit,
       
        formState: { errors },
      } = useForm()
    
      const onSubmit =async (data) => {
        const userInfo={
            name:data.name,
            email:data.email,
            massage:data.massage,
        }
        try{
            await axios.post("https://getform.io/f/navvleya",userInfo);
            toast.success("the massage has been sent")


        }catch(error){
            console.log(error)
        }
      }
  return (
    <>
    <div name="Contact" className='max-w-screen-2xl container mx-auto px-4 md:px-20 my-20 '>
        <div className='text-3xl font-bold mb-4'>Contact me</div>
        <span>Please fill the form below to conatact me</span>

        <div className='flex flex-col items-center justify-center'>
            <form onSubmit={handleSubmit(onSubmit)} 
            //  action="https://getform.io/f/navvleya" 
            //   method="POST" 
             
             className='bg-slate-200 w-96 px-8 py-6'>
                <h1 className='text-xl font-semibold mb-3'>Send your Massage</h1>

                <div className='flex flex-col mb-4'>
                    <label className='block text-gray-700' >Fullname</label>
                    <input id='name' name="name"  type="text" placeholder='Enter your fullname' className='shadow apearance-none border rounded-lg py-2 px-3 text-gray-700 focus:out outline-none w-80' {...register("name", { required: true })}  />
                    {errors.name && <span className="text-red-700 "  >This field is required</span>}

                </div>
                <div className='flex flex-col mb-4'>
                    <label className='block text-gray-700' >Email</label>
                    <input id='name'name="email"  type="text" placeholder='Enter your Email' className='shadow apearance-none border rounded-lg py-2 px-3 text-gray-700 focus:out outline-none w-80' {...register("email", { required: true })}  />
                    {errors.email && <span className="text-red-700 " >This field is required</span>}

                </div>
                <div className='flex flex-col mb-4'>
                    <label className='block text-gray-700' >Massage</label>
                    <textarea id='name' name="massage" type="text" placeholder='Write your massage' className='shadow apearance-none border rounded-lg py-2 px-3 text-gray-700 focus:out outline-none w-80' {...register("massage", { required: true })} />
                    {errors.massage && <span className="text-red-700 "> This field is required</span>}


                </div>
                <div>
                    <button type='submit' className='bg-black text-white px-3 py-2 rounded-full cursor-pointer hover:bg-slate-800 duration-200'>Send</button>
                </div>

            </form>
        </div>

    </div>
      
    </>
  )
}

export default Contact
