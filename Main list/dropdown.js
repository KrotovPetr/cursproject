function myFunction(e){
    let isActive = document.getElementById("submenu").getAttribute("active")
    if(isActive?.toString()==="true"){
        document.getElementById("submenu").setAttribute("active","false")
    }else{
        document.getElementById("submenu").setAttribute("active","true")
    }
}