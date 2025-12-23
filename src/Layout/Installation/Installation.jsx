
import { getInstallApp, removeToDB } from "../../utility/addToDB";
import useApps from "../../hooks/useApps";
import InstalledApp from "../../Components/InstalledApp";
import { useState } from "react";
import { toast } from "react-toastify";



const Installation = () => {
    const {apps} = useApps()
    const allInstalledApp = getInstallApp()
    const [installApp, setInstallApp] = useState(allInstalledApp)
    const [sortOrder, setSortOrder] = useState('none')
    const data = apps.filter(app =>  allInstalledApp.includes(app.id))
    
    const handleRemove = (id) => {
        removeToDB(id)
        toast.success("Uninstall Succesfully")
        setInstallApp(prev => prev.filter(p => p.id !== id))
    }

    const sortedItem = () => {
        if(sortOrder === "high"){
            return [...data].sort((a,b) => b.size - a.size)
        }
        else if(sortOrder === "low"){
            return [...data].sort((a,b) => a.size - b.size)
        }
        else{
            return data
        }
    }
    
    return (
        <div className='pt-15 bg-[#F5F5F5] space-y-3 w-11/12 mx-auto '>
            
            <h1 className='text-4xl text-[#001931] font-bold text-center'>Your Installed Apps</h1>
            <p className='text-xl text-[#627382] text-center'>Explore All Trending Apps on the Market developed by us</p>
            <div className='flex justify-between items-center mt-8'>
                <p className='text-[#001931] text-2xl text-left font-semibold'>({sortedItem().length}) Apps Found</p>

                <ul className="menu  text-white rounded-box bg-[#001931]">
                    <li>
                        <details>
                        <summary className='font-semibold'>Sort By Size</summary>
                            <li className='hover:bg-white hover:text-black'><button onClick={() => setSortOrder("none")}>None</button></li>
                            <li className='hover:bg-white hover:text-black'><button onClick={() => setSortOrder("high")}>High-Low</button></li>
                            <li className='hover:bg-white hover:text-black'><button onClick={() => setSortOrder("low")}>Low-High</button></li>
                            
                        </details>
                    </li>
                </ul>
            </div>
            <div className="space-y-5">
                {
                    sortedItem().map(app => <InstalledApp data={app} key={app.id} handleRemove={handleRemove}></InstalledApp>)
                }
            </div>
            

            
        </div>
    );
};

export default Installation;