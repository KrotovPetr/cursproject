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
