// Complete the method that takes a sequence of objects with two keys each: country or state, and capital. Keys may be symbols or strings.

// The method should return an array of sentences declaring the state or country and its capital.


function capital(capitals){
    let word = capitals.map((words)=>{
      if(words.capital && words.state){
    return (`The capital of ${words.state} is ${words.capital}`);
      }
      if(words.capital && words.country){
        return (`The capital of ${words.country} is ${words.capital}`);
      }
    })
    return word
         }