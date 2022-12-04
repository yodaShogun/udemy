function scriptLoading(script){

    return new Promise((resolve, reject)=>{

            let element = document.createElement('script')
            element.src = script
            document.head.append(element)

            element.onload = ()=> resolve('Fichier '+ script +'  a ete charge')
            
            element.onerror = ()=>reject(new Error('an error has occured'))    
    }) 
} 

const promesse = scriptLoading('test.js') 

promesse.then(
    function(result){
        console.log(result);
    }, 

    function (error){
        console.log(error);
    }
) 

 