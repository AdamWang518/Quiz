
function change() {
    var header = document.getElementById("CGU");
    header.innerHTML = "CSIE@CGU";
    var para = document.getElementById("ID");
    para.innerHTML = "怎麼那麼棒！！.";
    }
function newbutton() {
    var btn = document.createElement("BUTTON");
    btn.innerHTML = "CLICK ME";
    document.body.appendChild(btn);
    btn.addEventListener('click',change);
    }