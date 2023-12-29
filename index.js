var len = document.querySelectorAll(".drum").length;

function playSound(key)
{
    var ch = key;

        if (ch === 'w') {
            var tom1 = new Audio('sounds/tom-1.mp3');
            tom1.play();
        }

        else if (ch === 'a') {
            var tom2 = new Audio('sounds/tom-2.mp3');
            tom2.play();
        }

        else if (ch === 's') {
            var tom3 = new Audio('sounds/tom-3.mp3');
            tom3.play();
        }

        else if (ch === 'd') {
            var tom4 = new Audio('sounds/tom-4.mp3');
            tom4.play();
        }

        else if (ch === 'j') {
            var snare = new Audio('sounds/snare.mp3');
            snare.play();
        }

        else if (ch === 'k') {
            var crash = new Audio('sounds/crash.mp3');
            crash.play();
        }

        else if (ch === 'l') {
            var kick = new Audio('sounds/kick-bass.mp3');
            kick.play();
        }

        else {
            alert("Wrong key !!");
        }

        document.querySelector("." + key).classList.add("pressed");
        
        var timegap = setTimeout(function(){
            document.querySelector("." + key).classList.remove("pressed");
        },100);
}

for (var i = 0; i < len; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var key = this.innerHTML;
        playSound(key);

    });   
}

document.addEventListener("keydown",function(event){
   
    playSound(event.key);

});