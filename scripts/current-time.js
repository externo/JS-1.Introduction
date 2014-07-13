var today = new Date();
var hours = today.getHours();
var mins = today.getMinutes();
if (mins<10){
    mins = "0"+mins; 
}
console.log(hours + ":" + mins);