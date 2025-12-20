import React from 'react';
import useApps from '../../hooks/useApps';
import App from './App';
import { Link } from 'react-router';

const HomeApps = () => {
    const {apps} = useApps()
    const appData = apps.slice(0,8)
    console.log(appData)
    return (
        <div className='font-bold w-11/12 mx-auto text-center space-y-3 mt-10'>
            <h1 className='text-4xl text-[#001931]'>Trending Apps</h1>
            <p className='text-xl text-[#627382]'>Explore All Trending Apps on the Market developed by us</p>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-7 lg:gap-15 w-11/12 mx-auto mt-10'>
                {
                    appData.map(app => <App data={app} key={app.id}></App>)
                }
            </div>
            <Link to={'/Apps'} className="btn p-4 px-8 mt-10 border-none text-white rounded-md"
            style={{ background: "linear-gradient(135deg, #4e34de 0%, #b46ff4 100%)" }}>Show All</Link>
        </div>
    );
};

export default HomeApps;