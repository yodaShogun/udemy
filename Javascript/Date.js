let actualDate = Date()
// let secondesDate = Date.now() 

// let datePrecis = new Date(2022, 11, 09, 11, 00)

// console.log(datePrecis);
// console.log(secondesDate);
// console.log(actualDate); 


let dateLocale = actualDate.toLocaleString('Fr-fr', {
    weekday:'long', 
    day:'numeric',
}) 

console.log(`il est ${dateLocale}`);

