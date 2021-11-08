function myFunction(e){
    let isActive = document.getElementById("submenu").getAttribute("active")
    if(isActive?.toString()==="true"){
        document.getElementById("submenu").setAttribute("active","false")
    }else{
        document.getElementById("submenu").setAttribute("active","true")
    }
}



function myFunction2(e){
    let isActive = document.getElementById("dropdownlist").getAttribute("active")
    if(isActive?.toString()==="true"){
        document.getElementById("dropdownlist").setAttribute("active","false")
    }else{
        document.getElementById("dropdownlist").setAttribute("active","true")
    }
}