class UserStorage {
    loginUser(id, password) {
        return new Promise((resorve, reject) => {
            setTimeout(() => {
                if (id === "jaehee" && password === "cording") {
                    resorve(id);
                } else {
                    reject(new Error("not found"));
                }
            }, 2000);
        });
    }

    getRoles(user) {
        return new Promise((resorve, reject) => {
            setTimeout(() => {
                if (user === "jaehee") {
                    resorve({ name: user, role: "developer" });
                } else {
                    reject(new Error("no access"));
                }
            }, 2000);
        });
    }
}

const userStorage = new UserStorage();
const id = prompt("enter user id");
const password = prompt("enter user password");

userStorage
    .loginUser(id, password)
    .then(userStorage.getRoles)
    .then((user) => alert(`Hello ${user.name}! You have a ${user.role}~`))
    .catch(console.log);
