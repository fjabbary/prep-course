
/* depending on the value of i, 
logs the same number of 
hash symbol to the console */

//Assignment 1 first method
for (let i = 1; i < 8; i++) {
  if (i == 1) {
    console.log('#')
  }
  else if (i == 2) {
    console.log('##')
  }
  else if (i == 3) {
    console.log('###')
  }
  else if (i == 4) {
    console.log('####')
  }
  else if (i == 5) {
    console.log('#####')
  }
  else if (i == 6) {
    console.log('######')
  }
  else if (i == 7) {
    console.log('#######')
  }
}


//Assignment 1 alternative method
/* In an alternative way,
   we concatenate (add)
   hash symbol on each iteration */
let content = '';
for (let i = 1; i < 8; i++) {
  content += '#';
  console.log(content)
}

//================================================================

//Assignment 2
function isEven(number) {
  if (number % 2 == 0) {
    console.log('Number is even')
  } else if (number % 2 == 1) {
    console.log('Number is odd')
  }
}

//Examples
isEven(13)
isEven(32)
