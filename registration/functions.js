
function getData(e){
    let button=document.getElementById("endbutton");
    button.addEventListener("click", function(event){
        let emailData=document.getElementById("email").value;
        let passData=document.getElementById("password").value;
        if((emailData.length==0) || (passData.length==0)){
            alert("Проверьте заполненность поля");
            return;
        }
        let emailsArr=["petrkrotov2001@mail.ru","peterjrotov@gmail.com"];
        let passArr=["24032001Qq","qwerty123"];
        let flag=false;
        for(let i=0;i<emailsArr.length;i++){
            if(emailData===emailsArr[i]){
                flag=true;
            }
        }
        if(flag==false){
            alert("Ошибка входа");
            return;
        }
        flag=false;
        for(let i=0; i<emailsArr.length;i++){
          if(emailData===emailsArr[i]){
              if(passData===passArr[i]){
                  flag=true;
                  document.location.href = "PAP.html";
              }
              else{
                  alert("Неверный пароль");
                  return;
              }
          }
        }
    },false)
}


