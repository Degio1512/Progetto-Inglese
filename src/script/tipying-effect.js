var i=0
var txt='Project For Revise all the topic of the year. The site is divided in two part, the first that is about the history and the second is based on the litterature so about the poets and texts.'
var speed=80
function type(){
    document.getElementById('type').innerHTML
        +=txt.charAt(i);
    i++;
    setTimeout(type,speed);
}
type()

