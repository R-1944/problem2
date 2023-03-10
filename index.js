// alert("Open the form");


function submitForm(){
    var enterdata = giveData();
    console.log("CALL THIS FUNCTION" , enterdata);
    validation();
    var readData = readingDataFromLocalStorge(enterdata);
   
    insert(readData);
}
 /*------------------fatch hthe data----------------- */

function giveData(){
    var nm= document.getElementById("fnm").value;
    var E_mail =document.getElementById("email").value;
    var phoneno = document.getElementById("phone").value;
    var birth = document.getElementById("bod").value;
    var app_time = document.getElementById("time").value;
    var fav_color = document.getElementById("favcolor").value;
    // var payment = document.getElementById("payment").value;
    // var Age = document.getElementById("ckbox").value;
    // var sub = document.getElementById("submit").value;

    var arr = [nm,E_mail,phoneno,birth,app_time,fav_color];
    return arr;
}
/* -------------------------- validation part --------------------*/ 
function validation(){
    var text = document.getElementById('fnm').value;
    console.log('text');
    if(text==null  || text==""){
        alert("Text can't be blank");
       
    }
    else if(text.length < 5){
        alert("Name require min 5 character");
        return false;
        
    }
    // var email1 = document.getElementById('email').value;
    // console.log("Email");
    // else if(email1=="")

    
}

/*------------------------DATA STORE IN LOCAL STORAGE--------------------------- */
function readingDataFromLocalStorge(enterdata){
    //storing data
    var firstname = localStorage.setItem("Name",enterdata[0]);
    var email = localStorage.setItem("Email",enterdata[1]);
    var Mobile = localStorage.setItem("Phone Number",enterdata[2]);
    var Birthdate = localStorage.setItem("BirthDate",enterdata[3]);
    var appTime = localStorage.setItem("Appoinment Time",enterdata[4]);
    var color =localStorage.setItem("Favuoritecolor",enterdata[5]);
    var paymentmethod = localStorage.setItem("payment Methode",enterdata[6]);
    var rang = localStorage.setItem("Range ",enterdata[7]);

}  


/*-----------------Insert the Data------------------------- */
function insert(readData){
    var row = table.insertRow();
    var cell1 = insertCell(0);
    var cell2 = insertCell(1);
    var cell3 = insertCell(2);
    var cell4 = insertCell(3);
    var cell5 = insertCell(4);
    var cell6 = insertCell(5);
    var cell7 = insertCell(6);
    var cell8 = insertCell(7);
    var cell9 = insertCell(8);
    var cell10 = insertCell(9);

    cell1.innerHTML = readData[0];
    cell2.innerHTML = readData[1];
    cell3.innerHTML = readData[3];
    cell4.innerHTML = readData[4];
    cell5.innerHTML = readData[5];
    cell6.innerHTML = readData[6];
    cell7.innerHTML = readData[7];
    cell8.innerHTML = readData[8];
    cell9.innerHTML = readData[9];
    cell10.innerHTML = readData[10];

}
