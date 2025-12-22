import React from 'react';
import Navbar from './Navbar';
import { Outlet } from 'react-router';
import Footer from './Footer';
import { ToastContainer } from 'react-toastify';


const Root = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar></Navbar>

            <div className='flex-1 pb-10 bg-[#F5F5F5]'>
                <Outlet ></Outlet>
            </div>
            
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