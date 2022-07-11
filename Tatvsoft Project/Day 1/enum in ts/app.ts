// enum in ts
//what is enum
// make a program with enum
// use enum with variables
// use enum with function

enum Days{
    mon="mon",tue="tue",
    //mon,tue,wed,thu,fri,sat,sun
}

//let whichDay:Days;
//whichDay=Days.mon

//console.warn(whichDay)

function whichDay(Day:Days)
{
    return Day
}
console.warn(whichDay(Days.mon))
