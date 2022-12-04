if('geolocation' in navigator){

    //getCurrentposition()/watchPosition()
    //succes, error, options:json 

    let options = {
        enableHighAccuracy: true,
    }
   let nav =  navigator.geolocation.watchPosition((position)=>{
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
    }, error) 

    navigator.geolocation.clearWatch(watch)

    function error(){
        alert("Geolocalisation denied")
    }

}else{
    alert("la geolocalisation n'est pas disponible ")
}