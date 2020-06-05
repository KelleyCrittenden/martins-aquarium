let tipsCollection = [] 


const getTipsData = () => {
    return fetch("http://localhost:8088/tips").then(
        (httpResponse) => {
            return httpResponse.json()
        }
    )
        .then( 
            (arrayOfTips) => {
                //100% sure the data is back
            tipsCollection = arrayOfTips
            } 
        )    
} 