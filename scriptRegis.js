// Soal nomor 6
let usernameRegis = document.querySelector("#usernameRegis");
let passwordRegis = document.querySelector("#passwordRegis");
let buttonRegis = document.querySelector("#buttonRegis");
let str = "";   
let censor = str.replace(/qwertyuio/,"welcome");
console.log(censor);


let userData = [];

buttonRegis.addEventListener('click', () =>{

    if (usernameRegis.value == null || usernameRegis.value == "" , passwordRegis.value == null || passwordRegis.value == ""){
                alert ("Data registrasi belum lengkap, Mohon lengkapi data anda.")
                return false;
            } else if ( usernameRegis.value.length < 6){
                alert ("Username minimal 6 karakter!");
                return false;
            }  else if ( passwordRegis.value.length < 8){
                alert ("Password minimal 8 karakter!");
                return false;    
            } else {
        
            userData.unshift(passwordRegis.value);
            userData.unshift(usernameRegis.value); 
            str = passwordRegis.value;
           document.querySelector("#printData").innerHTML = userData.join('<br>') ;
            alert ("Registrasi berhasil"); 
            };
});


function tampilkanPassword (){
        let a = passwordRegis;
        if (a.type === "password"){
            a.type = "text";
        } else {
            a.type = "password"
        }
};









