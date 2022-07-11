// class in ts
var App = /** @class */ (function () {
    function App(name) {
        this.name = "kd";
        this.name = name;
    }
    App.prototype.getName = function () {
        console.warn(this.name);
    };
    return App;
}());
var a1 = new App("kishan");
a1.getName();
