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

const newArray = [];

newArray.push(flatBase.flat1, flatBase.flat2, flatBase.flat3, flatBase.flat4, flatBase.flat5,);
//console.log(newArray)

//Replace a 2-room flat in the middle with a new description of a 1-room flat
newArray[2].numberOfRooms = 1; 
//console.log(newArray[2])

//Remove a 1-room flat obj from the beginning of the array
newArray.shift();
//console.log(newArray)