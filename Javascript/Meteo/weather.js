let town

if("geolocation" in navigator){
    navigator.geolocation.watchPosition((position)=>{
        let userLatitude = position.coords.latitude
        let userLongitude = position.coords.longitude

        let locateUrl  = `https://api.openweathermap.org/data/2.5/weather?lon=${userLongitude}&lat=${userLatitude}&appid=fefcf70b7d30b5f48970948299b2fda4&units=metric`
        let query = new XMLHttpRequest()
        query.open("GET", locateUrl)

        query.responseType = 'json'
        query.send() 

        query.onload = function(){
            if(query.readyState === XMLHttpRequest.DONE){
                if(query.status === 200){
                    let units = query.response
                    let townTemp = units.main.temp
                    let townName = units.name
                    document.getElementById("temperature_label").textContent = townTemp 
                    document.getElementById("ville").textContent = townName
    
                }
            }
        }
    
    }, locationError(), options)
}

function locationError(){
    town = "port-au-Prince"
    RecevoirTemperature(town)

} 

let options = {
    enableHighAccuracy : true
}

document.getElementById("changer").addEventListener('click', ()=>{
    town = prompt("Entrer une ville ")
    RecevoirTemperature(town)
}) 

function RecevoirTemperature(town){ 

    let  weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${town}&appid=fefcf70b7d30b5f48970948299b2fda4&units=metric`

    let query = new XMLHttpRequest()
    query.open("GET", weatherUrl)
    query.responseType = 'json'
    query.send() 

    query.onload = function(){
        if(query.readyState === XMLHttpRequest.DONE){
            if(query.status === 200){
                let units = query.response
                let townTemp = units.main.temp
                let townName = units.name
                document.getElementById("temperature_label").textContent = townTemp 
                document.getElementById("ville").textContent = townName

            }
        }
    }
} 