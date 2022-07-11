// function 

function cals(a:number,b?:number):number
{
    return b?a+b:a;
}
console.warn(cals(5001,55))