function Shape(){}
Shape.prototype.area = function(){
    return 0.0
}

function Circle(radius){
    this.radius = radius;
}

Circle.prototype = Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;

Circle.prototype.area = function(){
    return 3.14 * this.radius * this.radius
}

function Ellipse(a,b){
    this.a = a
    this.b = b
}

Ellipse.prototype = Object.create(Shape.prototype);
Ellipse.prototype.constructor = Ellipse;
Ellipse.prototype.area = function(){
    return this.a * this.b * 3.14
}

obj1 = new Shape();
obj2 = new Circle(3);
obj3 = new Ellipse(2,3);
console.log(obj1.area());
console.log(obj2.area());
console.log(obj3.area());
