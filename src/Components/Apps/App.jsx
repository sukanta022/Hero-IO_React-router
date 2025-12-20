import React from 'react';
import { Download, Star } from 'lucide-react';
const App = ({data}) => {
    const {image,title, ratingAvg, downloads } = data
    return (
        <div className='bg-white p-3 shadow-lg space-y-5 hover:scale-105 transition ease-in-out'>
                <img src={image} alt="" className='w-full h-50 rounded-lg' />

                <p className='text-center'>Name: {title}</p>
                <div className='flex justify-between items-center'>
                    <div className='flex md:gap-1 bg-[#F1F5E8] text-[#00D390] md:p-1'>
                        <Download />
                        <p>{downloads}</p>
                    </div>

                    <div className='flex md:gap-1 bg-[#FFF0E1] text-[#FF8F1E] md:p-1'>
                        <Star/>
                        <p>{ratingAvg}</p>
                    </div>
                </div>
            </div>
    );
};

export default App;