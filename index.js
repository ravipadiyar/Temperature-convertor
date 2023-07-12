const calculateTemp = () => {

  const numberTemp = document.getElementById('temp').value;
//   console.log(numberTemp);

  // the value selected by user 
  const tempSelected = document.getElementById('temp_diff');
  const  valueTemp = temp_diff.options[tempSelected.selectedIndex].value;
//   console.log(valueTemp);


// cel to feh function
    
    const celToFeh = (cel) => {
       let fahrenheit = Math.round((cel*9 /5)+32);
       return fahrenheit;
    }

    // feh to cel function
    
    const fehToCel = (feh) => {
        let Celsius = Math.round((feh-32)* 5/9);
        return Celsius;
     }

  let result;

  if(valueTemp == 'cel')
  {
    result = celToFeh(numberTemp);
    document.getElementById('resultContainer').innerHTML= ` ${result} Fahrenheit`;
    const name = document.getElementsByClassName('submit-btn').innerHTML = `Check`;
  }
  else {
    result = fehToCel(numberTemp);
    document.getElementById('resultContainer').innerHTML= ` ${result} Celsius`;
  }

  
}