
const getDiv = document.getElementsByClassName("child")
const hoverDiv = (e) => {
   for(let i=0; i<getDiv.length; i++){
    getDiv[i].style.width = "25%"
   }
    e.style.width= "50%";
    
}

const leaveDiv =(e) => {
    for(let i=0; i<getDiv.length; i++){
        getDiv[i].style.width = "33.30%"
       }
}


