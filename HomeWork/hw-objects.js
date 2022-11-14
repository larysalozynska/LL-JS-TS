 
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
  
	flatBase.flat1.rentPrice = flatBase.flat1.salePrice*0.015;
    flatBase.flat2.rentPrice = flatBase.flat2.salePrice*0.015;
    flatBase.flat3.rentPrice = flatBase.flat3.salePrice*0.015;
    flatBase.flat4.rentPrice = flatBase.flat4.salePrice*0.015;
    flatBase.flat5.rentPrice = flatBase.flat5.salePrice*0.015;
  
 console.log(flatBase.flat3.rentPrice)


  /*
const flatBase2 = [{
    address: "fgfgfgfg",
    space: 30,
    numberOfRooms: 1,
    salePrice: 30000,
    soldStatus: true,
  },{
    address: "fgfgfgfg",
    space: 60,
    numberOfRooms: 6,
    salePrice: 50000,
    soldStatus: false,
  },
]

flatBase2.forEach((elem, index) => {
          elem.rentPrice = elem.salePrice*0.015
})

console.log(flatBase2[1])
*/