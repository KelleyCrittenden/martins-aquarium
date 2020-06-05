

 /*responsible for generating a list of tip HTML represenations and putting in the browswer */

 const tipsList = () => {

    for (const currentTipsObject of tipsCollection) {
   const tipsHTML = tipsConverter(currentTipsObject) 


   const tipsArticleElement = document.querySelector(".tipsList")

   tipsArticleElement.innerHTML += tipsHTML
   }
}   


const tipsVisibilityButton = document.querySelector(".toggleTips")

tipsVisibilityButton.addEventListener("click", (clickEvent) => {

    document.querySelector(".tipsList").classList.toggle("hidden")
})