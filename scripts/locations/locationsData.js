let locationsCollection = []

const getLocationsData = () => {
    return fetch("http://localhost:8088/locations").then(
        (httpResponse) => {
            return httpResponse.json()
        }
    )
        .then( 
            (arrayOfLocations) => {
                //100% sure the data is back
            locationsCollection = arrayOfLocations
            } 
        )    
} 
