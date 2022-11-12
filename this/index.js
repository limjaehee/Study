// console.log(this);

{
    let obj = {
        value: "abc",
        fun: function () {
            console.log(this);
        },
    };

    // obj.fun();

    let copyObj = obj.fun;
    copyObj();
}
