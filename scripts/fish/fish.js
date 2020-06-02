/* this function will conver a single fish object t oan HTML represenative and return it

*/
const fishConverter = (fishObject) => {


    const fishHTMLRepresentation = ` <section class="fish">
    <section class="fish">
        <div class="">
            <img class="fish__picture"  src="${fishObject.picture}" alt="${fishObject.name} the ${fishObject.species}">
        </div>

        <div class="fish__details">
            <ul>
                <li>Species: ${fishObject.species}</li>
                <li>Name: ${fishObject.name}</li>
                <li>Food: ${fishObject.food}</li>
                <li>Length: ${fishObject.length}</li>
                <li>Location: ${fishObject.location}</li>
            </ul>
        </div>
    </section>`

    return fishHTMLRepresentation
}