import React, { useState } from 'react';
import useApps from '../../hooks/useApps';
import App from '../../Components/Apps/App';
import { Search } from 'lucide-react';
import logo from '../../../public/logo-D9NHcesw 1.png'
const AppsList = () => {
    const {apps, loading} = useApps()
    const [search, setSearch] = useState('')
    const [sortOrder, setSortOrder] = useState('none')
    const [searchLoading, setSearchLoading] = useState(false);
    const term = search.trim().toLocaleLowerCase()
    const searchedApps = term? apps.filter(app => app.title.toLocaleLowerCase().includes(term)): apps


    const sortedItem = () => {
        if(sortOrder === "high"){
            return [...searchedApps].sort((a,b) => b.downloads - a.downloads)
        }
        else if(sortOrder === "low"){
            return [...searchedApps].sort((a,b) => a.downloads - b.downloads)
        }
        else{
            return searchedApps
        }
    }

    

    return (
        <div className='pt-15 text-center bg-[#F5F5F5] space-y-3'>
            
            <h1 className='text-4xl text-[#001931] font-bold'>Our All Applications</h1>
            <p className='text-xl text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className='w-11/12 mx-auto flex flex-col gap-5 lg:flex-row justify-between items-center mt-8'>
                <p className='text-[#001931] text-2xl text-left font-semibold'>({searchedApps.length}) Apps Found</p>

                <ul className="menu  text-white rounded-box bg-[#001931]">
                    <li>
                        <details>
                        <summary className='font-semibold'>Sort By Downloads</summary>
                            <li className='hover:bg-white hover:text-black'><button onClick={() => setSortOrder("none")}>None</button></li>
                            <li className='hover:bg-white hover:text-black'><button onClick={() => setSortOrder("high")}>High-Low</button></li>
                            <li className='hover:bg-white hover:text-black'><button onClick={() => setSortOrder("low")}>Low-High</button></li>
                            
                        </details>
                    </li>
                </ul>


                <label className='input border-2 border-[#001931]/50'>
                    <Search className='text-[#C6CCD1]' />
                    <input
                        value={search}
                        onChange={(e) => {
                            setSearch(e.target.value)
                            setSearchLoading(true)
                            setTimeout(() => {
                                setSearchLoading(false);
                            }, 200);

                        }}
                        
                        type='search'
                        placeholder= 'Search apps'
                    />
                </label>
            </div>

            {
                loading || searchLoading ? <div className='flex place-content-center p-10 max-h-screen text-3xl md:text-5xl font-bold text-[#001931]'>L <img src={logo} alt="" className="animate-spin"></img> ading..</div> : (!searchedApps.length) ?
                 <div className='text-center p-10 max-h-screen text-3xl font-bold text-[#001931]'>No data available</div> : <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mt-8 w-11/12 mx-auto'>
                    {
                        sortedItem().map(app => <App data={app} key={app.id}></App>)
                    }
                </div>

            }

            
        </div>
    );
};

export default AppsList;