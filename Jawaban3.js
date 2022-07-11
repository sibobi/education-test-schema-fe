function output1(max) {
    let result = '\n';
    for (let i = 1; i <= max; i++) {
      for (let y = 1; y <= i; y++) {
        result += '*';
      }
      result += '\n';
    }
  
    return `\nOutput 1 : ${result}`;
  }
  
  function output2(max) {
    let result = '';
    for (let i = max; i > 0; i--) {
      for (let y = 0; y <= i; y++) {
        result += ' ';
      }
  
      for (let x = 0; x < max - i; x++) {
        result += '*';
      }
  
      result += '\n';
    }
  
    return `\nOutput 2: \n ${result}`;
  }
  
  output1(6);
  output2(6);