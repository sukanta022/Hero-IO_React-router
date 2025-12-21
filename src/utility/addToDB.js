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


const addToStore = (id) => {
    const appInstallData = getInstallApp()
    if(appInstallData.includes(id)){
        alert("Book already exist")
    }
    else {
        appInstallData.push(id)
        const data = JSON.stringify(appInstallData)
        localStorage.setItem("applist", data)
    }
}

export {addToStore,getInstallApp};