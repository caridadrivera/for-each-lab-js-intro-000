function iterativeLog(array){
  array.forEach(`${index}: ${element}`);
}

function iterate(callback){
  var evens = [2,4,6,8];
  evens.forEach(callback);
  return evens;
}