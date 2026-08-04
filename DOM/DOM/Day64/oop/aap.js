//oops

//Constructor function

function Person(n, a, c){
    this.name = n
    this.age = a
    this.city = c
}

let p1 = new Person("s", 12, "Delhi")
let p2 = new Person("A", 10, "Delhi")

console.log(p1, p2)

Person.prototype.sayHi = function(){
    console.log(`Hello, my name is ${this.name} `)
}
p1.sayHi()
p2.sayHi()


//class 
class Car{
    constructor(b = "", t = "", c = ""){
        this.brand = b
        this.tyres = t
        this.color = c

    }

    tellAboutCar(){
        console.log(this.brand, this.tyres, this.color)
    }
}

let c1 = new Car("BMW", 4, "black")
let c2 = new Car("Suzuki", 4, "White")
console.log(c1, c2)
c1.tellAboutCar()
c2.tellAboutCar()