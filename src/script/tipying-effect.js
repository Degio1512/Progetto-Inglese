var i=0
var txt='Project For Revise all the argument of the year. The site is divided in two part, the first that is about the history of the year and the second is about the litterature so about the poets and texts of the year'
var speed=80
function type(){
    document.getElementById('type').innerHTML
        +=txt.charAt(i);
    i++;
    setTimeout(type,speed);
}
type()

