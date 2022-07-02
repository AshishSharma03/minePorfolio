function InistaiHideClosebtn(){const closeMenu = document.getElementById("closebtn")
closeMenu.style.display = "none"
}



// console.log(screen.availWidth)

InistaiHideClosebtn()
function OpenMenu(){
       const navi = document.getElementById("mobnavs")
       const OpenMenu = document.getElementById("openbtn")
       const closeMenu = document.getElementById("closebtn")
       navi.style.position = "absolute"
       navi.style.display = "block"
       OpenMenu.style.display = "none"
       closeMenu .style.display = "block"


}


function closeMenu(){
    const navi = document.getElementById("mobnavs")
    const OpenMenu = document.getElementById("openbtn")
    const closeMenu = document.getElementById("closebtn")
 //    const 
    // navi.style.position = "absolute"
    navi.style.display = "none"
    OpenMenu.style.display = "block"
    closeMenu.style.display = "none"



}


