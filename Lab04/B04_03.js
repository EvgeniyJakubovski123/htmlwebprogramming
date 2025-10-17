function Candy(name, weight,sugarcoeff){
    this.name = name;
    this.weight = weight;
    this.sugarcoeff = sugarcoeff;
}

Candy.prototype.sugar = function(){
    return this.weight * this.sugarcoeff;
}

Candy.prototype.toString = function(){
    return `${this.name} ${this.weight} ${this.sugar()}`;
}

function Chocolate(name,weight){
    Candy.call(this,name,weight,0.5)
}

Chocolate.prototype = Object.create(Candy.prototype);
Chocolate.prototype.constructor = Chocolate;

function Korowka(name,weight){
    Candy.call(this,name,weight,0.7)
}
Korowka.prototype = Object.create(Candy.prototype);
Korowka.prototype.constructor = Korowka;

function Present(candies){
    this.candies = candies;
}

Present.prototype.weight = function(){
    let sum = 0;
    for (let i in this.candies){
        sum += this.candies[i].weight;
    }
    return sum;
}
Present.prototype.find = function(){
    // Параметри для цукру
    let low_sugar_coeff = 0.2;
    let high_sugar_coeff = 0.8;

    let list_of_correct_candies = [];

    for (let candy of this.candies) {
        if (candy.sugarcoeff > low_sugar_coeff && candy.sugarcoeff < high_sugar_coeff) {
            list_of_correct_candies.push(candy);
        }
    }

    return list_of_correct_candies;
}



obj1 = new Present([new Chocolate('chocolate',70),new Korowka('Korowka',30)]);

console.log(obj1.weight())
console.log(obj1.find())


//obj_candies = new Present(['korowka','morkovka']);
//console.log(obj_candies);
//console.log(obj_candies.candies);

