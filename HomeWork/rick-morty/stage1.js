import {resultsData} from './data/stage1-data.js'

//#1 Implement a function that would return Location’s id by it’s name

const locationName = "Post-Apocalyptic Earth";
function locationId (locationName) {
    return resultsData.results.find(el => el.name === locationName).id
}
//console.log(locationId(locationName))


//#2 Implement a function that would return all the Locations with number of residents ≤ 5

const numberOfResidents = 5;
function locationByResidents (numberOfResidents) {
    return resultsData.results.filter(el => el.residents.length <= numberOfResidents )

}
//console.log(locationByResidents(numberOfResidents))

//#3 Implement a function that would get the response and return a list of all Locations, that would have only id and name properties.

function locationList () {
    const locationListArray = []
   
  //  for (let i=0; i<resultsData.results.length; i++) {
  //     locationListArray.push('id:' + resultsData.results[i].id + ' ' + resultsData.results[i].name)
  // }

    resultsData.results.forEach(el => locationListArray.push('id:' + el.id + ' ' + el.name))

    return locationListArray 
}
//console.log(locationList())

//#4 Implement a function that would return quantity of all residents provided in the response.

function residentsQuantity () {

    const residentsNumber = [];
    resultsData.results.forEach(el => residentsNumber.push(el.residents.length))

    return residentsNumber.reduce((a,b) => a+b)
}

//console.log(residentsQuantity())

//#5 Implement a function that would return a list of all locations’ URLs.

function urlList () {

    return resultsData.results.forEach(el => console.log(el.url))
}
//urlList()

//#6 Using RickAndMorty API’s documentation and Got API client, write a request that would receive all Characters in a response.

// fetch('https://rickandmortyapi.com/api/character', {
//     method: 'GET'
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

 
// #7 Implement a function that would return an object of all the locations in the following format:

 function changeFormat (array) {
    
    const formatedObject = {
        dimentions: []
    }

    array.forEach((el) => {
        const newObject = {
        dimension: el.dimension,
        locations:[{
            id:el.id,
            name:el.name,
            type:el.type
            }
        ]
       }
       formatedObject.dimentions.push(newObject)
    })
    
    return formatedObject
}

console.log(changeFormat(resultsData.results))