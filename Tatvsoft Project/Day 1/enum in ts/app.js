// enum in ts
//what is enum
// make a program with enum
// use enum with variables
// use enum with function
var Days;
(function (Days) {
    Days["mon"] = "mon";
    Days["tue"] = "tue";
    //mon,tue,wed,thu,fri,sat,sun
})(Days || (Days = {}));
//let whichDay:Days;
//whichDay=Days.mon
//console.warn(whichDay)
function whichDay(Day) {
    return Day;
}
console.warn(whichDay(Days.mon));
