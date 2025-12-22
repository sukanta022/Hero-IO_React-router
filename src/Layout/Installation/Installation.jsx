
import { getInstallApp } from "../../utility/addToDB";
import useApps from "../../hooks/useApps";
import InstalledApp from "../../Components/InstalledApp";


const Installation = () => {
    const {apps} = useApps()
    const allInstalledApp = getInstallApp()
    
    const data = apps.filter(app =>  allInstalledApp.includes(app.id))
    
    return (
        <div className='pt-15 bg-[#F5F5F5] space-y-3 w-11/12 mx-auto '>
            
            <h1 className='text-4xl text-[#001931] font-bold text-center'>Your Installed Apps</h1>
            <p className='text-xl text-[#627382] text-center'>Explore All Trending Apps on the Market developed by us</p>
            
            <div className="space-y-5">
                {
                    data.map(app => <InstalledApp data={app} key={app.id}></InstalledApp>)
                }
            </div>
            

            
        </div>
    );
};

export default Installation;