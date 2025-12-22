import React from 'react';
import { AiFillLike } from "react-icons/ai";
import { FaStar } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
const InstalledApp = ({data}) => {
    const {image, title, ratingAvg, downloadsM, size} = data

    return (
        <div className="bg-white w-full px-5 py-2 flex justify-between items-center">
            <div className="flex items-center gap-5">
                <img src={image} alt="" className="h-30 w-30" />

                <div className="space-y-1">
                    <h2 className="text-2xl text-[#001931] font-semibold">{title}</h2>
                    <div className="text-xl flex gap-8">
                        <p className="text-[#2EAC6F] flex gap-1 items-center"><MdOutlineFileDownload /> {downloadsM}</p>
                        <p className="text-[#FF8811] flex gap-1 items-center"><FaStar/>{ratingAvg} </p>
                        <p className="text-[#627382] ">{size} MB</p>
                    </div>
                </div>
            </div>

            <button  className='btn p-3 md:p-5 text-[18px] bg-[#00D390] text-white font-semibold rounded-md'>Uninstall</button>
        </div>
    );
};

export default InstalledApp;