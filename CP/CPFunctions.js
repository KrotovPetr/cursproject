
function getRate(e){
    let star = document.getElementsByClassName("like");
    star[0].addEventListener("mouseover",()=>{
        star[0].style.background="#c0a915";
    },false);
    star[0].addEventListener("click",()=>{
        star[0].style.background="#d3c787";

    },false);


    star[1].addEventListener("mouseover",()=>{
        for(let i=0;i<=1;i++){
            star[i].style.background="#c0a915";
        }
    },false);
    star[1].addEventListener("click",()=>{
        for(let i=0;i<=1;i++){
            star[i].style.background="#d3c787";
        }
    },false);

    star[2].addEventListener("mouseover",()=>{
        for(let i=0;i<=2;i++){
            star[i].style.background="#c0a915";
        }
    },false);

    star[2].addEventListener("click",()=>{
        for(let i=0;i<=2;i++){
            star[i].style.background="#d3c787";
        }
    },false);

    star[3].addEventListener("mouseover",()=>{
        for(let i=0;i<=3;i++){
            star[i].style.background="#c0a915";
        }
    },false);

    star[3].addEventListener("click",()=>{
        for(let i=0;i<=3;i++){
            star[i].style.background="#d3c787";
        }
    },false);

    star[4].addEventListener("mouseover",()=>{
        for(let i=0;i<=4;i++){
            star[i].style.background="#c0a915";
        }
    },false);
    star[4].addEventListener("click",()=>{
        for(let i=0;i<=4;i++){
            star[i].style.background="#d3c787";
        }
    },false);

    if(star[0].style.background!=="#d3c787") {
        for(let i=0;i<=4;i++){
            star[i].style.background="#100E19";
        }
    }



}



getRate(this);
function getStars(){
    let star = document.getElementById("likes");
    star.addEventListener("mouseover",()=>{
        star.style.background="#c0a915";
    },false);

}
