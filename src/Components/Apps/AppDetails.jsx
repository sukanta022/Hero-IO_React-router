import React from 'react';
import { useParams } from 'react-router';
import useApps from '../../hooks/useApps';
import { MdOutlineFileDownload } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { AiFillLike } from "react-icons/ai";
import Chart from '../chart';
import { addToStore } from '../../utility/addToDB';

const AppDetails = () => {
    const {id} = useParams()
    const ID = parseInt(id)
    const {apps} = useApps()
    const data = apps.find(app => app.id === ID)
    if (!data) {
        return <p>Loading...</p>;
  }
    const {image, title, ratings, description, ratingAvg, reviews, downloadsM,companyName, size} = data
    
    const handleInstall = (ID) => {
        addToStore(ID)
        alert("installed")
    } 

    return (
        <div className='w-10/12 mx-auto py-20'>
            
            <div className='flex flex-col lg:flex-row justify-between text-center lg:text-start items-center gap-10 mb-12'>
                <img src={image} alt="" className='w-66 h-70 shadow-2xl' />
                <div className='w-10/12'>

                    <h1 className='text-3xl font-bold pb-1'>{title}</h1>
                    <p className='text-[#99A4AD] border-b-2 w-full pb-4'>Developed by <span className='text-[#7B43E9]'>{companyName}</span></p>

                    <div className='flex gap-10 md:gap-15 flex-wrap lg:flex-nowrap lg:gap-30  justify-center lg:justify-start py-5 items-center'>
                        <div className='space-y-1 flex flex-col items-center lg:items-start'>
                            <MdOutlineFileDownload className='text-5xl text-[#2EAC6F]'/>
                            <p className='text-[#87929C]'>Downloads</p>
                            <p className='text-3xl text-[#001931] font-extrabold'>{downloadsM}</p>
                        </div>

                        <div className='space-y-1 flex flex-col items-center lg:items-start'>
                            <FaStar className='text-5xl text-[#FF8811]'/>
                            <p className='text-[#87929C]'>Average Ratings</p>
                            <p className='text-3xl text-[#001931] font-extrabold'>{ratingAvg}</p>
                        </div>

                        <div className='space-y-1 flex flex-col items-center lg:items-start'>
                            <AiFillLike className='text-5xl text-[#7039E6]'/>
                            <p className='text-[#87929C]'>Total Reviews</p>
                            <p className='text-3xl text-[#001931] font-extrabold'>{reviews/1000}k</p>
                        </div>
                    </div>

                    <button onClick={() => handleInstall(ID)} className='btn p-3 md:p-5 text-[18px] bg-[#00D390] text-white font-semibold rounded-md'>Install Now ({size} MB)</button>

                </div>
                
            </div>
            <Chart ratings={ratings}></Chart>

            <div className='mt-10 '>
                <h1 className='text-2xl text-[#001931] font-semibold'>Descriptions</h1>
                <p className='text-[#A2ACB4]'>{description}</p>
            </div>
        </div>
    );
};

export default AppDetails;