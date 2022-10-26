{
    function delay(ms) {
        return new Promise((resolve) => setTimeout(resolve, ms));
    }

    async function getApple() {
        await delay(2000);
        return "🍎";
    }

    async function getBanana() {
        await delay(1000); //딜레이 후
        return "🍌"; //리턴 출력
    }

    function pickAllFruits() {
        //모두 응답 후 출력
        return Promise.all([getApple(), getBanana()]).then((fruits) =>
            fruits.join("+")
        );
    }

    pickAllFruits().then(console.log); //🍎+🍌

    function pickOnlyOne() {
        //빠르게 응답받은 하나만 출력
        return Promise.race([getApple(), getBanana()]);
    }

    pickOnlyOne().then(console.log); //🍌
}
