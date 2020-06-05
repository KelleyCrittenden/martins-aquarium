
 /*responsible for generating a list of location HTML represenations and putting in the browswer */

 const locationsList = () => {

    for (const currentLocationsObject of locationsCollection) {
   const locationsHTML = locationsConverter(currentLocationsObject) 


   const locationsArticleElement = document.querySelector(".locationsList")

   locationsArticleElement.innerHTML += locationsHTML
   
    }
}


const locationVisibilityButton = document.querySelector(".toggleLocations")

locationVisibilityButton.addEventListener("click", (clickEvent) => {
    // const locationListArticle = document.querySelector(".locationList")
    // locationListArticle.classList.toggle("hidden")

    document.querySelector(".locationsList").classList.toggle("hidden")
})
