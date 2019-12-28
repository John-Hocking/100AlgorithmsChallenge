function areThereDuplicates(...args) {
  let arr = [...args];
  
  lookup = {}
  for(let i = 0; i < arr.length; i++) {
    let char = arr[i]
    if(lookup[char]) {
      return true;
    } else lookup[char] = 1;
  }
  return false;
}



console.log(areThereDuplicates(1, 2, 4))
console.log(areThereDuplicates(1, 2, 2))
console.log(areThereDuplicates('a', 'b', 'c', 'a'))
