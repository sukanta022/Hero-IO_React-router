import React from 'react';
import appsStore from '../../public/appsstore.png'
import playStore from '../../public/playstore.png'
import phone from '../../public/Iphone.png'
const Banner = () => {
    
    return (
        <section className='pt-15 text-center bg-[#F5F5F5]'>
            <h1 className='text-5xl lg:text-7xl text-[#001931] font-bold'>We Build
                <br/> <span className='bg-[linear-gradient(135deg,#4e34de,#b46ff4)] bg-clip-text text-transparent'>Productive</span> Apps
            </h1>

            <p className='text-[#627382] text-xl mt-8'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br></br>Our goal is to turn your ideas into digital experiences that truly make an impact.</p>

            <div className='space-x-5 mt-10'>
                <a  href="https://play.google.com/store/games?hl=en" 
                    target="_blank"
                    className='btn text-[#001931] text-xl py-7 gap-4 shadow-md'
                >
                    <img src={playStore} alt="" />
                    Google Play
                </a>

                <a  href="https://www.apple.com/app-store/" 
                    target="_blank"
                    className='btn text-[#001931] text-xl py-7 gap-4 shadow-md'>
                    <img src={appsStore} alt="" />
                    App Store
                </a>
            </div>

            <div className="flex justify-center items-center mt-10 ">
                {/* Left side images */}
                <div className='hidden lg:flex flex-col p-10 space-y-8'>
                    <div className="ml-auto mr-5">
                        <img src="/L1.png" alt="Icon 1" className="block" />
                    </div>
                    <div className="ml-auto mr-20">
                        <img src="/L2.png" alt="Icon 2" className="block" />
                    </div>
                    <div className="ml-auto mr-30">
                        <img src="/L3.png" alt="Icon 3" className="block" />
                    </div>
                </div>

                <img src={phone} alt="Phone" className="z-10" />

                {/* right side images */}
                <div className='hidden lg:flex flex-col p-10 space-y-8'>
                    <div className="mr-auto ml-5">
                        <img src="/R1.png" alt="Icon 1" className="block" />
                    </div>
                    <div className="mr-auto ml-20">
                        <img src="/R2.png" alt="Icon 2" className="block" />
                    </div>
                    <div className="mr-auto ml-30">
                        <img src="/R3.png" alt="Icon 3" className="block" />
                    </div>
                </div> 
            </div>


            <div className='p-10 lg:p-15 text-white space-y-10' style={{ background: "linear-gradient(135deg, #4e34de 0%, #b46ff4 100%)" }}>
                <p className="text-3xl lg:text-4xl font-bold">Trusted by Millions, Built for You</p>
                <div className='flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-50'>
                    <div className='space-y-3'>
                        <p className='text-[#DED1FA] text-[12px] lg:text-[14px]'>Total Downloads</p>
                        <p className='text-5xl font-extrabold'>29.6M</p>
                        <p className='text-[#DED1FA] text-[12px] lg:text-[14px]'>21% more than last month</p>
                    </div>

                    <div className='space-y-3'>
                        <p className='text-[#DED1FA] text-[12px] lg:text-[14px]'>Total Reviews</p>
                        <p className='text-5xl font-extrabold'>906K</p>
                        <p className='text-[#DED1FA] text-[12px] lg:text-[14px]'>46% more than last month</p>
                    </div>

                    <div className='space-y-3'>
                        <p className='text-[#DED1FA] text-[12px] lg:text-[14px]'>Active Apps</p>
                        <p className='text-5xl font-extrabold'>132+</p>
                        <p className='text-[#DED1FA] text-[12px] lg:text-[14px]'>31 more will Launch</p>
                    </div>
                </div>
                
            </div>



        </section>
    );
};

export default Banner;