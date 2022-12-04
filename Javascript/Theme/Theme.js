let themetext = document.querySelector('span')
let themeBtn = document.getElementById('mode') 

themeBtn.addEventListener('click',()=>{

    if(document.body.classList.contains('dark')){
        document.body.className =''
        themetext.textcontent = "theme sombre"
        localStorage.setItem('theme', 'clair')
    }else
        modeSombre()
})

let preference = localStorage.getItem('theme')
if(localStorage.getItem('theme')){
    if(preference == 'sombre')
        modeSombre()
}

function modeSombre(){
    let classElement = document.querySelector('body')
    classElement.classList.add('dark')
    themetext.textcontent = "theme clair"
    localStorage.setItem('theme', 'sombre')
}