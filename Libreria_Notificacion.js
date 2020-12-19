var divConfirm = document.createElement("div")
divConfirm.id = "divConfirmContainer"
divConfirm.classList.add("confirm")    
divConfirm.setAttribute("style", "display:none;")

var divConfirmVacio = document.createElement("div")    
divConfirmVacio.id = "divConfirmVacio";
divConfirmVacio.addEventListener("click", function (event) {
  document.getElementById("confirmNo").click()
});

divConfirmVacio.setAttribute("style", "position: fixed;width: 100%;height: 100%;background: rgba(0, 0, 0, 0.4);top: 0px;left: 0px;");

var divConfirmContenedor = document.createElement("div")

divConfirmContenedor.setAttribute("style", "padding: 20px 20px;background: white;position: absolute;width: auto;height: auto;left: 50%;top: 50%;transform: translate(-50%, -50%);border-radius: 5px;");

var divConfirmTitle = document.createElement("div");
divConfirmTitle.id = "confirmTitle";
divConfirmTitle.setAttribute("style", "color: #333;padding: 0;font-weight: 500;font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;margin:0px;margin-bottom:22px;font-size: 18px;");


var divConfirmMsg = document.createElement("div");
divConfirmMsg.id = "confirmMessage";    
divConfirmMsg.setAttribute("style", "color: #333;padding: 0;font-weight: 500;font-family: 'Helvetica Neue',Helvetica,Arial,sans-serif;margin:15px 0px;font-size: 14px;");

var divConfirmBtn =  document.createElement("div");

var divConfirmInputYes = document.createElement("input"); 
divConfirmInputYes.id = "confirmYes";
divConfirmInputYes.type = "button";
divConfirmInputYes.value = "Yes";
divConfirmInputYes.setAttribute("style","display: inline-block;padding: 6px 12px;font-size: 12px;font-weight: 400;line-height: 1.42857143;text-align: center;white-space: nowrap;vertical-align: middle;-ms-touch-action: manipulation;touch-action: manipulation;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;border-radius: 4px;    min-height: 1em;-webkit-transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease, background 0.1s ease, -webkit-box-shadow 0.1s ease;transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease, background 0.1s ease, -webkit-box-shadow 0.1s ease;transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease, box-shadow 0.1s ease, background 0.1s ease;transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease, box-shadow 0.1s ease, background 0.1s ease, -webkit-box-shadow 0.1s ease;    -webkit-tap-highlight-color: transparent;border: none;background-image: none;background:#3498db;color:white;margin-right: 8px;");

divConfirmBtn.appendChild(divConfirmInputYes);

var divConfirmInputNo = document.createElement("input"); 
divConfirmInputNo.id = "confirmNo";
divConfirmInputNo.type = "button";
divConfirmInputNo.value = "No";
divConfirmInputNo.setAttribute("style","display: inline-block;padding: 6px 12px;font-size: 12px;font-weight: 400;line-height: 1.42857143;text-align: center;white-space: nowrap;vertical-align: middle;-ms-touch-action: manipulation;touch-action: manipulation;cursor: pointer;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;border-radius: 4px;    min-height: 1em;-webkit-transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease, background 0.1s ease, -webkit-box-shadow 0.1s ease;transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease, background 0.1s ease, -webkit-box-shadow 0.1s ease;transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease, box-shadow 0.1s ease, background 0.1s ease;transition: opacity 0.1s ease, background-color 0.1s ease, color 0.1s ease, box-shadow 0.1s ease, background 0.1s ease, -webkit-box-shadow 0.1s ease;    -webkit-tap-highlight-color: transparent;border: none;background-image: none;");

divConfirmBtn.appendChild(divConfirmInputNo);

divConfirmContenedor.appendChild(divConfirmTitle)
divConfirmContenedor.appendChild(divConfirmMsg)
divConfirmContenedor.appendChild(divConfirmBtn)

divConfirm.appendChild(divConfirmVacio);        
divConfirm.appendChild(divConfirmContenedor)

document.body.appendChild(divConfirm);

const ui = { confirm: function(message,title,textyes,textnot){ return createConfirm(message,title,textyes,textnot) } }

const createConfirm = function (message,title,textyes,textnot){
  return new Promise((complete, failed)=>{     
    document.getElementById("confirmTitle").textContent = title;
    document.getElementById("confirmMessage").textContent = message;
    document.getElementById("confirmYes").value = textyes;
    document.getElementById("confirmNo").value = textnot;

    //$('#confirmYes').off('click');
    //$('#confirmNo').off('click');   

    document.getElementById("confirmYes").addEventListener('click', function(){
       alert(true); document.getElementById('divConfirmContainer').style.display='none'; complete(true);
    }, false);     
    
    document.getElementById("confirmNo").addEventListener('click', function(){
       alert(false); document.getElementById('divConfirmContainer').style.display='none'; complete(false);
    }, false);     

    document.getElementById('divConfirmContainer').style.display ='block'
  });
}
                    
const confirm = function(mensaje,title,textyes,textnot) { 
  return ui.confirm(mensaje,title,textyes,textnot);    
}