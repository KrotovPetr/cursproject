function problemFunction(e){
    let sendButton=document.getElementById("sendbutton");
    sendButton.addEventListener("click",()=>{
        alert("Запрос отправлен! Ждите ответа!");
        document.location.href="/MainlPage/Main.html";
    },false);
    let saveButton=document.getElementById("savebutton");
    saveButton.addEventListener("click",()=>{
        alert("Сохранено!");

    },false);
}