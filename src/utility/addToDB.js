const addToStore = (id) => {
    const appInstallData = getInstallApp()
    appInstallData.push(id)
    const data = JSON.stringify(appInstallData)
    localStorage.setItem("applist", data)  
}

const removeToDB = (id) =>{
    console.log("dvh")
    const appInstallData = getInstallApp()
    const newAppInstallData = appInstallData.filter(app => app !== id)
    const data = JSON.stringify(newAppInstallData)
    localStorage.setItem("applist", data)
}

const getInstallApp = () => {
    const storedAppStr = localStorage.getItem("applist")
    if(storedAppStr ) {
        const storedAppData = JSON.parse(storedAppStr )
        return storedAppData
    }
    else{
        return [];
    }
}

export {addToStore,getInstallApp,removeToDB};