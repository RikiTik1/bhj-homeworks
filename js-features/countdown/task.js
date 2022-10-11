let second = function() {
    let timer = document.getElementById("timer");
    timer.textContent -= 1;
    if(timer.textContent == 0){
    clearInterval(set);
    alert("Вы победили в конкурсе!");
    };
};
let set = setInterval(second, 1000);
