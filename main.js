let shiftKeyDown = false;

window.addEventListener("keydown", function(e) {
    if (e.keyCode == 16) {
        console.log("keydown", shiftKeyDown);
        shiftKeyDown = true;
    }
});

window.addEventListener("keyup", function(e) {
    if (e.keyCode == 16) {
        console.log("keyup", shiftKeyDown);
        shiftKeyDown = false;
    }
});


var inputsList = Array.prototype.slice.call(document.querySelectorAll("input"));

var firstChecked,
    secondChecked;
inputsList.forEach(function(input) {
    input.addEventListener('change', function() {

        if (firstChecked === undefined) {
            firstChecked = inputsList.indexOf(input);
        }

        if (firstChecked >= 0 && shiftKeyDown) {
            secondChecked = inputsList.indexOf(input);
            if (firstChecked < secondChecked) {
                for (var i = firstChecked; i <= secondChecked; i++) {
                    inputsList[i].checked = true;
                }
            } else if (firstChecked > secondChecked) {
                for (var j = firstChecked; j >= secondChecked; j--) {
                    inputsList[j].checked = true;
                }
            }
        }

    });

});



// console.log(inputsList);
