
function getData(e){
    let button=document.getElementById("endbutton");

    button.addEventListener("click", function(event){

        let emailData=document.getElementById("email").value;
        let passData=document.getElementById("password").value;
        let loginData=document.getElementById("login").value;
        let repassData=document.getElementById("passwordrep").value;
        if((emailData.length==0) || (passData.length==0)||(loginData.length==0)||(repassData.length==0)){
            alert("Ошибка! Проверьте заполненность поля!");
            return;
        }else if(passData!=repassData){
            alert("Ошибка! Пароли не совпадают!");
            return;
        }else if((!emailValidation(emailData))){
            alert("Ошибка! Некорректный email!");
            return;
        } else {
            document.location.href = "/cursproject/PA/PAP.html";
        }

    },false)
}


function emailValidation(value) {

    let txt = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    return txt.test(value);

}