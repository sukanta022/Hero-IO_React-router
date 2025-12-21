import React, { useState } from 'react';
import useApps from '../../hooks/useApps';
import App from '../../Components/Apps/App';
import { Search } from 'lucide-react';

const AppsList = () => {
    const {apps} = useApps()
    const [search, setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase()
    const searchedApps = term? apps.filter(app => app.title.toLocaleLowerCase().includes(term)): apps
    return (
        <div className='pt-15 text-center bg-[#F5F5F5] space-y-3'>
            
            <h1 className='text-4xl text-[#001931] font-bold'>Our All Applications</h1>
            <p className='text-xl text-[#627382]'>Explore All Apps on the Market developed by us. We code for Millions</p>

            <div className='w-11/12 mx-auto flex justify-between items-center mt-8'>
                <p className='text-[#001931] text-2xl text-left font-semibold'>({searchedApps.length}) Apps Found</p>

                <label className='input border-2 border-[#001931]/50'>
                    <Search className='text-[#C6CCD1]' />
                    <input
                        value={search}
                        onChange={e => setSearch(e.target.value)}
                        type='search'
                        placeholder= 'Search apps'
                    />
                </label>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 mt-8 w-11/12 mx-auto'>
                {
                    searchedApps.map(app => <App data={app} key={app.id}></App>)
                }
            </div>
        </div>
    );
};

export default AppsList;