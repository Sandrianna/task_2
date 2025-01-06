function calculate(arr) {
    const newArr = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 == 0){
            newArr.push(arr[i] + 4);
        }
        else if(arr[i] % 2 !==0){
            newArr.push(arr[i] - 2);
        }
    }
    const allNumbers = newArr.filter(num => num % 13 !== 0); 

    let result = allNumbers.reduce((sum, item) => {
        return sum + item;
    }, 0);

    console.log(result);
  }
  
console.log(calculate([15, 2, 3, 5, 6]));