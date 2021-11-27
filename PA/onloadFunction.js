window.onload=()=>{
    let date=document.getElementById("date");
    let registr=new Date();
    date.innerText=registr.getDate()+'/'+registr.getMonth()+'/'+registr.getFullYear();
}


