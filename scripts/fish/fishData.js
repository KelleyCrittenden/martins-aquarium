const fishCollection = [
    {
        species: "Green Mandarin Goby",
        name: "Ollie",
        food: ["algae", "crustaceans"],
        length: 6,
        location: "Bora Bora, Tahiti",
        picture: "https://saltwateraquariumblog.com/wp-content/uploads/2009/11/mandarin-by-Luc-Viatour.jpg"
    },

    {
        species: "Wrasses",
        name: "River",
        food: ["algae", "crustaceans"],
        length: 9,
        location: "Riviera Maya, Mexico",
        picture: "https://aquariumadviser.com/wp-content/uploads/2018/12/Wrasses.jpg"
    },

    {
        species: "Coral Beauties",
        name: "Cora",
        food: "algae",
        length: 5,
        location: "Australia",
        picture: "https://aquariumadviser.com/wp-content/uploads/2018/12/Coral-Beauties.jpg"
    },

    {
        species: "Royal Gramma Basslet",
        name: "Queenie",
        food: ["algae", "crustaceans"],
        length: 10,
        location: "Carribean Sea",
        picture: "https://aquariumadviser.com/wp-content/uploads/2018/12/Royal-Gramma-Basslet.jpg"
    },

    {
        species: "Tang",
        name: "Goldie",
        food: ["algae", "crustaceans"],
        length: 12,
        location: "Kauai, Hawaii",
        picture: "https://aquariumadviser.com/wp-content/uploads/2018/12/Tang-Fish.jpg"
    },

    {
        species: "Watchman Goby",
        name: "Echo",
        food: ["algae", "crustaceans"],
        length: 20,
        location: "Australia",
        picture: "https://aquariumadviser.com/wp-content/uploads/2018/12/Watchman-Goby.jpg"
    },

    {
        species: "Dottyback",
        name: "Dottie",
        food: ["algae", "crustaceans"],
        length: 13,
        location: "Riviera Maya, Mexico",
        picture: "https://aquariumadviser.com/wp-content/uploads/2018/12/Dottyback.jpg" 
    },

    {
        species: "Blenny Fish",
        name: "Benny",
        food: ["algae", "crustaceans"],
        length: 8,
        location: "Bora Bora, Tahiti",
        picture: "https://aquariumadviser.com/wp-content/uploads/2018/12/Blenny-Fish.jpg"
    }
]

    // 3, 6, 9, 12, etc... fish
const mostHolyFish = () => {
    let holyFish = []

    for (fish of fishCollection) {
      if (fish.length % 3 === 0) {
          holyFish.push(fish)
        } 
        
    }
    return holyFish
}


// 5, 10, 15, 20, 25, etc... fish
const soldierFish = () => {
    let soldiers =[]

    for (fish of fishCollection) {
        if (fish.length % 5 === 0 && fish.length % 3 !==0){
            soldiers.push(fish)
        }
    }
    return soldiers
}

// Any fish not a multiple of 3 or 5
const nonHolyFish = () => {
    let regularFish = []

    for (fish of fishCollection) {
        if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
            regularFish.push(fish)
        } 
    }


    return regularFish
}

console.log(nonHolyFish())