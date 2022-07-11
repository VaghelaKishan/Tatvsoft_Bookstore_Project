// class in ts

class App{
    name:string="kd";
    constructor(name)
    {
        this.name=name
    }

    getName()
    {
        console.warn(this.name)
    }
}

let a1=new App("kishan");
a1.getName();