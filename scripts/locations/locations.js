/* this function will conver a single locations object t oan HTML represenative and return it

*/
const locationsConverter = (locationsObject) => {


    const locationsHTMLRepresentation = ` 
    <section class="locations">
        <div class="">
            <img class="locations__picture"  src="${locationsObject.picture}" alt="${locationsObject.locations}">
        </div>

        <div class="locations__details">
            ${locationsObject.locations}
        </div>
    </section>`

    return locationsHTMLRepresentation
}


