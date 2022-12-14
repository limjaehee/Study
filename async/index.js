{
    function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async function getApple() {
        await delay(2000);
        return "π";
    }

    async function getBanana() {
        await delay(1000); //λλ μ΄ ν
        return "π"; //λ¦¬ν΄ μΆλ ₯
    }

    function pickAllFruits() {
        //λͺ¨λ μλ΅ ν μΆλ ₯
        return Promise.all([getApple(), getBanana()]).then((fruits) =>
            fruits.join("+")
        );
    }

    pickAllFruits().then(console.log); //π+π

    function pickOnlyOne() {
        //λΉ λ₯΄κ² μλ΅λ°μ νλλ§ μΆλ ₯
        return Promise.race([getApple(), getBanana()]);
    }

    pickOnlyOne().then(console.log); //π
}
