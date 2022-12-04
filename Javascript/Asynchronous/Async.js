function scriptLoading(script){

    return new Promise((resolve, reject)=>{

            let element = document.createElement('script')
            element.src = script
            document.head.append(element)

            element.onload = ()=> resolve('Fichier '+ script +'  a ete charge')
            
            element.onerror = ()=>reject(new Error('an error has occured'))    
    }) 
} 

async function checkLoading(){
    try{
        const scriptA = await scriptLoading('Test.js')
        console.log(scriptA)
        const scriptB = await scriptLoading('Animation.js')
        console.log(scriptB);
    }catch(error){
        console.log(error)
        document.head.lastChild.remove()
    }
} 

checkLoading()