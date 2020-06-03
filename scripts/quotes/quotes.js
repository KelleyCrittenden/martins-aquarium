/* this function will conver a single quotes object to an HTML represenative and return it

*/
const quotesConverter = (quotesObject) => {


    const quotesHTMLRepresentation = ` <section class="quotes">
        ${quotesObject.quotes}
    </section>`   


    return quotesHTMLRepresentation
}