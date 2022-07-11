class users{
    // name="";
    // age=0;
    // email="";
    // constructor(name,age.email)
    constructor(public name,public age,public email){}
    // {
    //     this.name=name;
    //     this.age=age;
    //     this.email=email;
    // }
    displayVal()
    {
        console.log(this.name,this.age,this.email)
    }

}
const u1=new users('kishan',21,'kishan58@gmail.com');

u1.displayVal();