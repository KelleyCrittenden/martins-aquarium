let quotesCollection = []  

const getQuotesData = () => {
    return fetch("http://localhost:8088/quotes").then(
        (httpResponse) => {
            return httpResponse.json()
        }
    )
        .then( 
            (arrayOfQuotes) => {
                //100% sure the data is back
            quotesCollection = arrayOfQuotes  
            } 
        )    
} 