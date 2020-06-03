

 /*responsible for generating a list of fish HTML represenations and putting in the browswer */

 /*const fishList = () => {

     for (const currentFishObject of fishCollection) {
    const fishHTML = fishConverter(currentFishObject) 


    const fishArticleElement = document.querySelector(".fishList")

    fishArticleElement.innerHTML += fishHTML
    }
 }    
*/

 // Function to show holy fish in the browser
const showHolyFish = () => {
    const fishObjectsArray = mostHolyFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = fishConverter(fishObject)
        const fishArticleElement = document.querySelector(".fishList")
        fishArticleElement.innerHTML += fishHTMLRepresentation
    }
}

 // Function to show soldier fish in the browser
 const showSoldierFish = () => {
    const fishObjectsArray = soldierFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = fishConverter(fishObject)
        const fishArticleElement = document.querySelector(".fishList")
        fishArticleElement.innerHTML += fishHTMLRepresentation
    }
}

 // Function to show regular fish in the browser
 const showNonHolyFish = () => {
    const fishObjectsArray = nonHolyFish()

    for (const fishObject of fishObjectsArray) {
        const fishHTMLRepresentation = fishConverter(fishObject)
        const fishArticleElement = document.querySelector(".fishList")
        fishArticleElement.innerHTML += fishHTMLRepresentation
    }
}

const fishList = () => {
    // Invoke all three functions here
    showHolyFish()
    showSoldierFish()
    showNonHolyFish()    
    
}