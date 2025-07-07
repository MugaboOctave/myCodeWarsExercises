function duplicateCount(text){
  const lowerStr = text.toLowerCase();
  const charCount = {};
  let count = 0;
  
  for (let char of lowerStr){
    if(char !== ''){
      charCount[char] = (charCount[char] || 0) + 1;
    }
  }
  
  for (let key in charCount){
    if (charCount[key] > 1){
      count ++;
    }
  }
  return count
}