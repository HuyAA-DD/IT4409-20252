const students = [
    {
        name : "A",
        score : 10
    },
    {
        name : "B",
        score : 9
    }
]

let avg = 0;
let num_stud = students.length
for (let stud of students)
{
    avg += stud.score;
}
avg = avg / num_stud
console.log(avg)