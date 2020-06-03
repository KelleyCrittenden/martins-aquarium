
 /*responsible for generating a list of quote HTML represenations and putting in the browswer */

 const quotesList = () => {

    for (const currentQuotesObject of quotesCollection) {
   const quotesHTML = quotesConverter(currentQuotesObject) 


   const quotesArticleElement = document.querySelector(".quotesList")

   quotesArticleElement.innerHTML += quotesHTML
   }
}    