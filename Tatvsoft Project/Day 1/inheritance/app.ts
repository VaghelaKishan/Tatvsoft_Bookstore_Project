// inheritance in ts
class Parent{
    name;
    setName(name)
    {
        this.name=name
    }
}

class child extends Parent{
    
    getName()
    {
        return this.name
    }
}

let c1 = new child();
c1.setName("kevin")
console.warn(c1.getName())