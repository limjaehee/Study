let onLoggin = async function () {
    const email = document.getElementById("email");
    const password = document.getElementById("pw");
    const loginBox = document.getElementById("loginBox");
    const loginMessage = document.getElementById("loginMessage");

    try {
        let res = await axios({
            method: "POST",
            url: "https://reqres.in/api/login",
            data: {
                email: email.value,
                password: password.value,
            },
        }).then((response) => {
            loginBox.classList.add("hide");
            loginMessage.textContent = `로그인 성공! 당신의 토큰번호는 ${response.data.token}`;
        });
    } catch (err) {
        loginMessage.textContent = "로그인 실패!";
        throw new Error(err);
    }
};
