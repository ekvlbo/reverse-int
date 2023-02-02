module.exports = function reverse (n) {
    let number = String(n);
    let result = '';
  
    
       
    if (number[0] === '-') {
      for (let i = 1; i < number.length; i++) { 
      result = number[i] + result; 
      } 
    } else {
      for (let i = 0; i < number.length; i++) { 
      result = number[i] + result; }  
    
    }
    return result;
    
}
