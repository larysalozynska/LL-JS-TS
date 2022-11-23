const flatBase = {
    flat1: {
    address: "fgfgfgfg",
    space: 30,
    numberOfRooms: 1,
    salePrice: 30000,
    soldStatus: true,
  },
  flat2: {
      address: "fgfgfgfg",
      space: 40,
      numberOfRooms: 2,
      salePrice: 40000,
      soldStatus: false,
    },
    flat3: {
      address: "fgfgfgfg",
      space: 50,
      numberOfRooms: 2,
      salePrice: 50000,
      soldStatus: true,
    },
    flat4: {
      address: "fgfgfgfg",
      space: 60,
      numberOfRooms: 2,
      salePrice: 60000,
      soldStatus: true,
    },
    flat5: {
      address: "fgfgfgfg",
      space: 100,
      numberOfRooms: 5,
      salePrice: 70000,
      soldStatus: false,
    }
};

// 1. A function showAFlat(flat) that would receive a flat as a parameter and would console.log() all the data about the flat.
function showAFlat(flatNumber) {

  console.log(flatNumber)

}
//showAFlat(flatBase.flat2);

//2. A function markAsSold() that would take flat as a parameter and mark it as sold
function markAsSold(flatNumber) {

  flatNumber.soldStatus = true;
  console.log(flatNumber)
  
}
//markAsSold(flatBase.flat2)

//3. A function filterBySpace(flatsArray, desiredSpace) that would console.log and then return the new array of flats with the area equal or greater that the desiredSpace

const flatBase2 = [
{
  address: "fgfgfgfg",
  space: 30,
  numberOfRooms: 1,
  salePrice: 30000,
  soldStatus: true,
},
{
    address: "fgfgfgfg",
    space: 40,
    numberOfRooms: 2,
    salePrice: 40000,
    soldStatus: false,
  },
{
    address: "fgfgfgfg",
    space: 50,
    numberOfRooms: 2,
    salePrice: 50000,
    soldStatus: true,
  },
 {
    address: "fgfgfgfg",
    space: 60,
    numberOfRooms: 2,
    salePrice: 60000,
    soldStatus: true,
  },
  {
    address: "fgfgfgfg",
    space: 100,
    numberOfRooms: 5,
    salePrice: 70000,
    soldStatus: false,
  }
];

function filterBySpace(flatsArray, desiredSpace) {
  const sortedFlatArray = [];
 
  sortedFlatArray.push(flatsArray.filter(elm => elm.space > desiredSpace ));

  return console.log(sortedFlatArray);

};

//filterBySpace(flatBase2, 50)


//4 A function getShortFlatInfo(flat) that would return only address, numberOfRooms and salesPrice
function getShortFlatInfo(flatNumber) {

  return `Flat address: ${flatNumber.address}, \n\Numbers of rooms: ${flatNumber.numberOfRooms}, \n\Sales Price: ${flatNumber.salePrice}`

}
//console.log(getShortFlatInfo(flatBase.flat2));


