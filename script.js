let now = new Date();
let time = new Date(now.getFullYear(), now.getMonth());
function getElapsedHoursFromDate() {
let a = prompt("Введите дату"); // write a negative number if you want to display the date of the previous and so on month!!! SORRY
time.setDate(a);
return now - time;
}
alert((Math.round((getElapsedHoursFromDate() / 1000 / 60 / 60)*100)/100));
