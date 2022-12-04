//const url = "http://universities.hipolabs.com/search?country=United+States"

//Get info form api
// async function usSchool(){
//     const query = await fetch(url, {
//         method: "GET"
//     })

//     if(!query.ok){
//         alert("A problem has occcured")
//     }else{
//         let data = await query.json()
//         document.querySelector('span').textContent = data[0].domains
//         console.log(data);
//     }
// } 
//usSchool()

//send data to API 
const url = "https://lesoublisdelinfo.com/api.php"

async function sendName(prenom){
    const querySend = await fetch(url, {
        method:"POST",
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
            prenom 
        })
    }) 

    if(!querySend.ok)
        alert('a problem has occured')
    else{
        const data = await querySend.json()
        console.log(data);
    }
} 

sendName("PAPA")
