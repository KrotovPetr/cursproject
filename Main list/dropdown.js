function myFunction(e,id){
    let isActive = document.getElementById("submenu").getAttribute("active");
    if(isActive?.toString()==="true"){
        document.getElementById("submenu").setAttribute("active","false")
    }else{
        document.getElementById("submenu").setAttribute("active","true")
    }
}

function myFunction3(e,id){
    let isActive = document.getElementById(id).getAttribute("active");
    if(isActive?.toString()==="true"){
        document.getElementById(id).setAttribute("active","false")
    }else{
        document.getElementById(id).setAttribute("active","true")
    }
}



