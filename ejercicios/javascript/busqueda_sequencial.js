function sequentialSearch(element, array){

    for (var i in array){
  
      if (array[i] == element) return i; 
  
    }
  
    return -1;
  
  }
  
   var letters = ["a", "b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n"];
  
  console.log(sequentialSearch("g",letters)); 