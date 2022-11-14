 	//Task 1
    //Fix the SyntaxError. No renaming
  
	/*
		let text = 'hello';
		text = 'hello world';
		console.log(text); // have to be 'hello world'
  
    let anotherText = 'wassup';
		anotherText = 'wassup, bro!';
		console.log(anotherText); // have to be 'wassup, bro!'
  */
    
  	// Task 2
    // Make the assertions pass. Modify the object. Don't edit the initial obj manually ;)
  
 /* 
    const obj = {}
        obj.count = 2;
        obj.child = {strings: ['aloha'], count: 4}; Like!
  			
 		console.log(obj.count === 2) // have to be true
  	console.log(obj.child.count === 4) //have to be true
  	console.log(obj.child.strings[0] === 'aloha') //have to be true
*/
  
  // Task 3
  // Add any condition that will be satisfied such that the console.log() statement logs true.
  
 /*
  	let text = 'hello';
		if (text === 'hello') { // Запускала ? -> вертає true
  		text = text + ' world';
		}
		console.log(text === 'hello world');
  */

  

  /*
  	//Task 4
  	// Explain, why the following statements are true
  
  
  	console.log((4 + true) === 5) //Type conversion -> true returns 1 
  	console.log((2 / null) === Infinity) //ділення на 0 
  */
  
  
  // Task 4.5
  // Modify the array to satisfy the conditionals. Don't edit the initial array
  
 /* 
  const a = [1,2,3]
  a[3]=6 *435;
  a[4]='a string';
  a[5]=true;
 
  
  console.log(a.length === 6)
  console.log(a.includes('a string'))
  console.log(a.includes(true))
  console.log(a.includes(a.length * 435))
  
  
  */
  
  //Task 5
  //Write a function which would take initial array as a param and multiply all it's values by 2.
  //Function should return a new array 
    
  //Call the function and console.log the result.
  
/*
  const initial = [1,2,3,4,5,6,7]


  function multiplyAllBy2(array) {
    let newArray = [];
    
    array.forEach(function(item) {     
      let multiplyedValue = item*2 
      newArray.push(multiplyedValue)
      
    })
    
    return newArray;                         
  }
  
  console.log (multiplyAllBy2(initial))
 */


  
  // Task 6
  // Write an arrow function which would make a comparison result to true
  
  /*
  const a = [1,2,3]
  const b = ['1', '2', '3']
  
	//let b2 = b.map((item) => Number(item))
 //	b=b2
  
  a.forEach((elem, index) => {
    a[index] = elem.toString();
  })
  
  console.log(a);
  
  console.log(JSON.stringify(a) === JSON.stringify(b))
 
 */
  

 	//Task 7 
    
 	//Write a function which would sort an array with Bubble Sort in ascending order
 	//Function should return a new array 
    
 	//Call the function and console.log the result.
  
/*
  const initial = [1,5,7,2,4,0,8,2,1]
    
  function sorted (array) {
  	return array.sort((a,b) => a-b)
  }
	
  console.log(sorted(initial))
 */