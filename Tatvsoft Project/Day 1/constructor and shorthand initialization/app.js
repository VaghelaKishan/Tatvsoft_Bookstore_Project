var users = /** @class */ (function () {
    // name="";
    // age=0;
    // email="";
    // constructor(name,age.email)
    function users(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    // {
    //     this.name=name;
    //     this.age=age;
    //     this.email=email;
    // }
    users.prototype.displayVal = function () {
        console.log(this.name, this.age, this.email);
    };
    return users;
}());
var u1 = new users('kishan', 21, 'kishan58@gmail.com');
u1.displayVal();
