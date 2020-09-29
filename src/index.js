
exports.min = function min (array) {
  if (array === undefined || array.length ===0  ) return 0;
  array.sort(function(a,b) {
    if (a > b) return 1; 
    if (a == b) return 0; 
    if (a < b) return -1;
    
  });
  return array.shift();
}

exports.max = function max (array) {
  if (array === undefined || array.length ===0  ) return 0;
  array.sort(function(a,b) {
    if (a > b) return 1; 
    if (a == b) return 0; 
    if (a < b) return -1;
    
  });
  return array.pop();
}

exports.avg = function avg (array) {
  if (array === undefined || array.length ===0  ) return 0;
  let sum = array.reduce((sum, current) => sum + current, 0)
  return sum/array.length;
}
