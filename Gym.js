function home(){
    document.getElementById("homes").style.color="rgb(5, 167, 167)";
    document.getElementById("plans").style.color="black";
    document.getElementById("contacts").style.color="black";
    document.getElementById("blogs").style.color="black";
    document.getElementById("programs").style.color="black";

}

function program(){
    document.getElementById("homes").style.color="black";
    document.getElementById("plans").style.color="black";
    document.getElementById("contacts").style.color="black";
    document.getElementById("blogs").style.color="black";
    document.getElementById("programs").style.color="rgb(5, 167, 167)";

}
function plan(){
    document.getElementById("homes").style.color="black";
    document.getElementById("plans").style.color="rgb(5, 167, 167);";
    document.getElementById("contacts").style.color="black";
    document.getElementById("blogs").style.color="black";
    document.getElementById("programs").style.color="black";

}
function blog(){
    document.getElementById("homes").style.color="black";
    document.getElementById("plans").style.color="black";
    document.getElementById("contacts").style.color="black";
    document.getElementById("blogs").style.color="rgb(5, 167, 167);";
    document.getElementById("programs").style.color="black";

}
function contact(){
    document.getElementById("homes").style.color="black";
    document.getElementById("plans").style.color="black";
    document.getElementById("contacts").style.color="rgb(5, 167, 167);";
    document.getElementById("blogs").style.color="black";
    document.getElementById("programs").style.color="black";

}

// submit

function submit(){
    let name = document.getElementById("name");
    let number = document.getElementById("number");

    if(name.value == ""){
        alert("Please Enter Name")
    }else if(number.value == ""){
        alert("Please Enter Number")
    }else{
        alert("Thanks For Join : " + name.value)
    }
}
