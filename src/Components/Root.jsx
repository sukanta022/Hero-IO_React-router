import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';
import useApps from '../hooks/useApps';
import logo from '../../public/logo-D9NHcesw 1.png'

const Root = () => {
    const {loading} = useApps()
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>

            {
                loading ? <div className='flex place-content-center p-10 max-h-screen text-3xl md:text-5xl font-bold text-[#001931]'>L <img src={logo} alt="" className="animate-spin"></img> ading..</div> : <div className='flex-1 pb-10 bg-[#F5F5F5]'>
                <Outlet ></Outlet>
            </div>
            }
            
            
            <Footer></Footer>

            <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        
      />
            
            
        </div>
    );
};

export default Root;