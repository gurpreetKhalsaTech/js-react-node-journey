const name = "Gurpreet";
const skills = ["Flutter", "Dart", "Firebase"];
const newSkills = [...skills, "JavaScript", "React", "Node.js"];

console.log(`Hi, I'm ${name}`);
console.log("Old stack:", skills);
console.log("New stack:", newSkills);

const square = (n) => n * n;
console.log("Squares:", [1, 2, 3, 4, 5].map(square));