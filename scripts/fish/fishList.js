

 /*responsible for generating a list of fish HTML represenations and putting in the browswer */

 const fishList = () => {

     for (const currentFishObject of fishCollection) {
    const fishHTML = fishConverter(currentFishObject) 


    const fishArticleElement = document.querySelector(".fishList")

    fishArticleElement.innerHTML += fishHTML
    }
 }    