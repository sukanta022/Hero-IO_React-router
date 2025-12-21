import React from 'react';
import { Download} from 'lucide-react';
import { FaStar } from "react-icons/fa";
import { Link } from 'react-router';
const App = ({data}) => {
    const {image,title, ratingAvg, downloadsM,id } = data
    return (
        <Link to={`/AppDetails/${id}`}>
            <div className='bg-white p-3 shadow-lg space-y-5 hover:scale-105 transition ease-in-out'>
                    <img src={image} alt="" className='w-full h-50 rounded-lg' />

                    <p className='text-center'>Name: {title}</p>
                    <div className='flex justify-between items-center'>
                        <div className='flex md:gap-1 bg-[#F1F5E8] text-[#00D390] md:p-1'>
                            <Download />
                            <p>{downloadsM}</p>
                        </div>

                        <div className='flex justify-center items-center md:gap-1 bg-[#FFF0E1] text-[#FF8F1E] md:p-1'>
                            <FaStar></FaStar>
                            <p>{ratingAvg}</p>
                        </div>
                    </div>
            </div>
        </Link>
    );
};

export default App;