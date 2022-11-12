"use strict";

class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    //1. getter 상단 this.age 호출
    get age() {
        return this._age;
    }

    //2. setter 값이 할당된 상단 age 호출
    //4. 다시 value에게 할당
    //5. 계속 반복되면 Maximum call stack size exceeded 이라는 에러 메시지 호출
    //6. 변수 이름을 다르게 만들어주면 무한반복 중지됨
    //   주로 _를 사용
    set age(value) {
        //3. value는 다시 setter로 돌아가서 호출
        //💡class를 사용하는 개발자가 황당한 값을 입력할 때 방지하기 위해서 setter 사용

        if (value < 0) {
            console.log("The age input is small.");
        }
        this._age = value < 0 ? 0 : value;
    }

    speak() {
        console.log(`Hi ${this.name}! your age is ${this.age} years old.`);
    }
}

const userInfo = new User("jaehee", -1);
userInfo.speak(); //Hi jaehee! your age is 0 years old.

console.clear();

//-----------------------------------------------------------------

class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class SquearShape extends Shape {}
const squearShape = new SquearShape(20, 20, "orange");
squearShape.draw(); //drawing orange color of

class TriangleShape extends Shape {
    getArea() {
        //super 사용시 부모의 메서드 호출 뒤에 호출할 수 있다.
        return super.getArea() / 2;
    }
}
const triangleShape = new TriangleShape(20, 20, "green");
console.log(triangleShape.getArea()); //200
