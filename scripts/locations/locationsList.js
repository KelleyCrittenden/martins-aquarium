
 /*responsible for generating a list of location HTML represenations and putting in the browswer */

 const locationsList = () => {

    for (const currentLocationsObject of locationsCollection) {
   const locationsHTML = locationsConverter(currentLocationsObject) 


   const locationsArticleElement = document.querySelector(".locationsList")

   locationsArticleElement.innerHTML += locationsHTML
   
    }
}
