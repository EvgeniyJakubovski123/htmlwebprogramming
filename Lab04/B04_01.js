Object.prototype.size = function() {
    let count = 0;
    for (let k in this){
        for (let key in this) {
            if (this.hasOwnProperty(key) && typeof this[key] !== "function") {
                count++;
            }
        }
        return count;
    };

}


obj1 = new Object();

obj2 = new Object();//empty object

let object3 = {

    1:"first",
    greet(){
        console.log("Hello World");
    }
}

obj1[1]= 'first';
obj1 [ 2] = 'second'
//obj1 [3] = 'third'
console.log(object3.size())
//object with one function and one key

console.log(obj1.size())
//object with two keys

console.log(obj2.size())
//empty object





