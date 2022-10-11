let image = document.getElementById("cookie");
let clicker = document.getElementById("clicker__counter");  
clicker.text = Number(clicker.textContent);

let clickerCookie = function clickerCookie() {
    clicker.text += 1;
    if(clicker.text % 2 != 0){
        image.width = 150;
    } else {
        image.width = 200;
    };
    clicker.textContent = clicker.text;
};
image.onclick = clickerCookie;