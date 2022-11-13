// "use strict";
console.log(this);

{
    // let obj = {
    //     value: "abc",
    //     fun: function () {
    //         console.log(this);
    //     },
    // };
    // // obj.fun();
    // let copyObj = obj.fun;
    // copyObj();
}
{
    function log() {
        console.log(this);
    }

    let user = {
        name: "kiki",
        WhoAmI: log,
    };

    user.WhoAmI(); //{name: 'kiki', WhoAmI: ƒ}
    log(); //Window {window: Window, self: Window, …}
}
{
    let name = "kiki";

    function foo() {
        console.log(this); //'this' === undefined
    }

    foo(); //Cannot read properties of undefined (reading 'name')
}
{
    var a = 1;
    console.log(this.a);
}
{
    console.clear();

    let user = {
        WhoAmI: function () {
            let innerWhoAmI = function () {
                console.log(this);
            };
            innerWhoAmI();

            // let self = this;
            // let innerWhoAmI = function () {
            //     console.log(self);
            // };
            // innerWhoAmI(); //{WhoAmI: ƒ}
            // let innerWhoAmI = () => {
            //     console.log(this);
            // };
            // innerWhoAmI(); //{WhoAmI: ƒ}
        },
    };

    user.WhoAmI();
}
{
    console.clear();

    document.body.innerHTML += '<button id="a">클릭</button>';
    document.body.querySelector("#a").addEventListener("click", function (e) {
        console.log(this); //<button id="a">클릭</button>
    });
}
{
    console.clear();

    var Shape = function (name, size) {
        this.bark = "모양";
        this.name = name;
        this.size = size;
    };

    var star = new Shape("별", 70);
    var square = new Shape("사각형", 50);
    console.log(star, square);
}
