

// check password strength
if (document.title == "Sign Up") {
    var psd = document.getElementById("password");
    var confirm_psd = document.getElementById("confirm-password");
    var psd_bar = document.getElementById("psd-bar");
    var confirm_bar = document.getElementById("confirm-bar");

    psd.addEventListener("keyup", function(){
        checkStrength(psd.value, psd_bar);
    });

    confirm_psd.addEventListener("keyup", function(){
        checkStrength(confirm_psd.value, confirm_bar);
    });
}

function checkStrength(password, strenghtBar){

    var strength = 0;

    if (password.match(/[a-zA-z]/)){
        strength += 1;
    }

    if (password.match(/[._]/)) {
        strength +=1;
    }

    if (password.length >10) {
        strength += 1;
    }

    if (password.match(/[0-9]/)) {
        strength +=1;
    }

    switch (strength) {
        case 1: 
 
            strenghtBar.style.backgroundColor = "red";
            strenghtBar.style.width = "25%";
            strenghtBar.innerText = "Low";
            break;
        case 2:
            strenghtBar.style.backgroundColor = "yellow";
            strenghtBar.style.width = "50%";
            strenghtBar.innerText = "Medium-low";
            break;
        case 3:
            strenghtBar.style.backgroundColor = "blue";
            strenghtBar.style.width = "75%";
            strenghtBar.innerText = "Mdeiun";
            break;
        case 4:
            strenghtBar.style.backgroundColor = "green";
            strenghtBar.style.width = "100%";
            strenghtBar.innerText = "High";
            break;
        default:
            strenghtBar.style.width = "0%";
    }


}

