import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className='flex flex-col justify-center items-center text-center'>
            <img src="./error.png" alt="" />
            <h1 className='text-4xl text-[#001931] font-bold'>Your Installed Apps</h1>
            <p className='text-[18px] mt-3 text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            <Link to={'/'} className="btn p-4 px-8 mt-5 border-none text-white rounded-md"
            style={{ background: "linear-gradient(135deg, #4e34de 0%, #b46ff4 100%)" }}>Go Back!</Link>
        </div>
    );
};

export default ErrorPage;