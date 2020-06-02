/* this function will conver a single tip to an HTML represenative and return it

*/
const tipsConverter = (tipsObject) => {


    const tipsHTMLRepresentation = ` <section class="tips">
        ${tipsObject.tips}
    </section>`   


    return tipsHTMLRepresentation
}