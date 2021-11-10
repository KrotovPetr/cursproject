function myFunction(e){
    let isActive = document.getElementById("submenu").getAttribute("active")
    if(isActive?.toString()==="true"){
        document.getElementById("submenu").setAttribute("active","false")
    }else{
        document.getElementById("submenu").setAttribute("active","true")
    }
}



function myFunction2(e){
    let isActive = document.getElementById("name").getAttribute("active")
    if(isActive?.toString()==="true"){
        document.getElementById("name").setAttribute("active","false")
    }else{
        document.getElementById("name").setAttribute("active","true")
    }
}


function myFunction3(e){
    let isActive = document.getElementsByClassName("submenu2").getAttribute("active")
    let isActive2 = document.getElementsByClassName("submenu3").getAttribute("active")
    let isActive3 = document.getElementsByClassName("submenu4").getAttribute("active")
    let isActive4 = document.getElementsByClassName("submenu5").getAttribute("active")
    if(isActive?.toString()==="true"){
        document.getElementsByClassName('submenu2').setAttribute("active","false")
    }else{
        document.getElementsByClassName("submenu2").setAttribute("active","true")
    }
    if(isActive2?.toString()==="true"){
        document.getElementsByClassName('submenu3').setAttribute("active","false")
    }else{
        document.getElementsByClassName("submenu3").setAttribute("active","true")
    }
    if(isActive3?.toString()==="true"){
        document.getElementsByClassName('submenu4').setAttribute("active","false")
    }else{
        document.getElementsByClassName("submenu4").setAttribute("active","true")
    }
    if(isActive4?.toString()==="true"){
        document.getElementsByClassName('submenu5').setAttribute("active","false")
    }else{
        document.getElementsByClassName("submenu5").setAttribute("active","true")
    }
}
