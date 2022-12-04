// const url = "http://universities.hipolabs.com/search?country=United+States";

// //create ajax query 
// let query = new XMLHttpRequest();
// query.open("GET", url); //first parameter method: get\post, second parameter url 
// query.responseType = 'json'; //response precision 
// query.send(); //sending request  

// query.onload = function(){
//     if(query.readyState === XMLHttpRequest.DONE){
//         if(query.status === 200){
//             let answer = query.response //stock response
//             console.log(answer);
//             let universityDomains = answer.domains
//             console.log(`this university domain is: ${universityDomains} `);
//         }
//     }
// } 

const url = "https://lesoublisdelinfo.com/api.php"

// let query = new XMLHttpRequest()
// query.open('POST', url)
// query.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
// query.responseType = 'json'
// query.send('prenom=John')

// query.onload = function(){
//     if(query.readyState === XMLHttpRequest.DONE){
//         if(query.status === 200){
//              let answer = query.response
//              console.log(answer);
//         }
//     }
// } 
