let i=0;
let txt='No time like the present!'
let speed=40;
function typequote(){
    if(i<txt.length){
        document.getElementsByClassName('quote')[0].innerHTML += txt.charAt(i);
        i++;
        setTimeout(typequote,speed);
    }
}
setTimeout(typequote,10);