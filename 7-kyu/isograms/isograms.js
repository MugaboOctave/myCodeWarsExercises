function isIsogram(str){
  const lowerStr = str.toLowerCase();
  const charSet = new Set(lowerStr.replace(/\s/g, ''));
  return charSet.size === lowerStr.replace(/\s/g, '').length;
}