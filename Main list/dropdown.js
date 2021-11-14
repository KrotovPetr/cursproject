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


function myFunction4(у){
    let cards=document.getElementsByClassName("newsCard");

    cards[0].addEventListener("mouseover", function(event){
        cards[1].style.filter="blur(5px)";
        cards[2].style.filter="blur(5px)";
        cards[3].style.filter="blur(5px)";
        cards[4].style.filter="blur(5px)";
        cards[5].style.filter="blur(5px)";
    },false);
    cards[0].addEventListener("mouseout", function(event){
        cards[1].style.filter="blur(0px)";
        cards[2].style.filter="blur(0px)";
        cards[3].style.filter="blur(0px)";
        cards[4].style.filter="blur(0px)";
        cards[5].style.filter="blur(0px)";
    },false);

    cards[1].addEventListener("mouseover", function(event){
        cards[0].style.filter="blur(5px)";
        cards[2].style.filter="blur(5px)";
        cards[3].style.filter="blur(5px)";
        cards[4].style.filter="blur(5px)";
        cards[5].style.filter="blur(5px)";
    },false)
    cards[1].addEventListener("mouseout", function(event){
        cards[0].style.filter="blur(0px)";
        cards[2].style.filter="blur(0px)";
        cards[3].style.filter="blur(0px)";
        cards[4].style.filter="blur(0px)";
        cards[5].style.filter="blur(0px)";
    },false)
    cards[2].addEventListener("mouseover", function(event){
        cards[1].style.filter="blur(5px)";
        cards[0].style.filter="blur(5px)";
        cards[3].style.filter="blur(5px)";
        cards[4].style.filter="blur(5px)";
        cards[5].style.filter="blur(5px)";
    },false)
    cards[2].addEventListener("mouseout", function(event){
        cards[1].style.filter="blur(0px)";
        cards[0].style.filter="blur(0px)";
        cards[3].style.filter="blur(0px)";
        cards[4].style.filter="blur(0px)";
        cards[5].style.filter="blur(0px)";
    },false)
    cards[3].addEventListener("mouseover", function(event){
        cards[1].style.filter="blur(5px)";
        cards[2].style.filter="blur(5px)";
        cards[0].style.filter="blur(5px)";
        cards[4].style.filter="blur(5px)";
        cards[5].style.filter="blur(5px)";
    },false)
    cards[3].addEventListener("mouseout", function(event){
        cards[1].style.filter="blur(0px)";
        cards[2].style.filter="blur(0px)";
        cards[0].style.filter="blur(0px)";
        cards[4].style.filter="blur(0px)";
        cards[5].style.filter="blur(0px)";
    },false)
    cards[4].addEventListener("mouseover", function(event){
        cards[1].style.filter="blur(5px)";
        cards[2].style.filter="blur(5px)";
        cards[3].style.filter="blur(5px)";
        cards[0].style.filter="blur(5px)";
        cards[5].style.filter="blur(5px)";
    },false)
    cards[4].addEventListener("mouseout", function(event){
        cards[1].style.filter="blur(0px)";
        cards[2].style.filter="blur(0px)";
        cards[3].style.filter="blur(0px)";
        cards[0].style.filter="blur(0px)";
        cards[5].style.filter="blur(0px)";
    },false)
    cards[5].addEventListener("mouseover", function(event){
        cards[1].style.filter="blur(5px)";
        cards[2].style.filter="blur(5px)";
        cards[3].style.filter="blur(5px)";
        cards[4].style.filter="blur(5px)";
        cards[0].style.filter="blur(5px)";
    },false)
    cards[5].addEventListener("mouseout", function(event){
        cards[1].style.filter="blur(0px)";
        cards[2].style.filter="blur(0px)";
        cards[3].style.filter="blur(0px)";
        cards[4].style.filter="blur(0px)";
        cards[0].style.filter="blur(0px)";
    },false)
}


