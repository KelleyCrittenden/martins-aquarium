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

const fishTypeDropdown = document.querySelector(".typeChoice")
const contentTarget = document.querySelector(".fishList")


const clearFishList = () => contentTarget.innerHTML = ""

fishTypeDropdown.addEventListener("change", (clickEvent) => {
    // Get the value of the option chosen by the user
    const userChoice = clickEvent.target.value

    // If the user chose Holy, clear the list and only show holy fish
    if (userChoice === "holy") {
        clearFishList()
        showHolyFish()
    }

    else if (userChoice === "soldier") {
        clearFishList()
        showSoldierFish()
    }    

    else if (userChoice === "regular") {
            clearFishList()
            showNonHolyFish()
    } 
    
    else if (userChoice === "all") {
        clearFishList()
        fishList()
    }
    
} )   


const fishVisibilityButton = document.querySelector(".toggleFish")

fishVisibilityButton.addEventListener("click", (clickEvent) => {

    document.querySelector(".fishList").classList.toggle("hidden")
})



