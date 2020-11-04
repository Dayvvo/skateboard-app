
function displayornot(hamburger,qty,element,style) {
    let ham = 0
    let hamArray = [];
    if(qty === 1){
        ham = document.querySelector(hamburger);
        hamArray = [ham];
    }
    else{
        ham = document.querySelectorAll(hamburger);
        hamArray = [...ham];
    }
    hamArray.map(hamB=>{
        hamB.addEventListener(`click`,function () {
            let responsiveBar = document.querySelector(element)              
            console.log(responsiveBar);
            responsiveBar.classList.toggle(style)
            
            })    

    })

    
}

displayornot(`.hamburger`,2,`.responsiveBar`,`displayorNot`);

let colorpickers = document.querySelectorAll(`.color`);

for (const a of colorpickers) {

    a.addEventListener(`click`,()=>{
        for (const b of colorpickers) {
            if (b.classList.contains(`activeColor`) && b !==a) {
                b.classList.remove(`activeColor`);
                a.classList.add(`activeColor`)
            }
            let body = document.querySelector(`body`);
            body.classList.replace(`body${b.id}`,`body${a.id}`);
        }
    })
}