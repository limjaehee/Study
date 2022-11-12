{
    const name = "jaehee";
    const age = 20;
    const gender = "women";

    const user = {
        name,
        age,
        gender,
    };

    console.log(user);
}
{
    const student = {
        name: "Kiki",
        level: 2,
    };

    const { name: studentName, level: studentLevel } = student;

    console.log(studentName, studentLevel);

    const animals = ["🐕", "🐇"];

    const [first, second] = animals;
    console.log(first, second);
}
{
    const name = "";
    const age = 0;

    const userName = name ?? "Guest";
    const userAge = age ?? 10;
    console.log(userName); //""
    console.log(userAge); //0
}
