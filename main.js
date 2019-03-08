const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]
/*

*/
const studentContainer = document.querySelector("#container")
/* PART ONE
const createStudentComponent = (name, subject, info, score) => {
	if (score >= 60) {
		return `
    <div class="student">
    <h1 class="xx-large passing">${name}</h1>
    <section class="bordered dashed section--padded">${subject}</section>
    <aside class="pushRight">${info}</aside>
    </div>
    `
    } else {
    return `
    <div class="student">
    <h1>${name}</h1>
    <section>${subject}</section>
    <aside>${info}</aside>
    </div>
    `
    }
}
for (let i = 0; i < students.length; i++) {
    const student = students[i]
    studentContainer.innerHTML += createStudentComponent(
        student.name,
        student.subject,
        student.info,
        student.score
    )
}
END OF PART ONE
*/

/* PART TWO
Instead of defining four arguments (name subject info score) for the createStudentComponent function and then passing the individual properties when it is invoked, refactor the function to accept the entire object (student) as a single argument.

Then refactor your string interpolation code to use the object properties.
*/

const createStudentComponent = (student) => {
	if (student.score >= 60) {
		return `
    <div class="student">
    <h1 class="xx-large passing">${student.name}</h1>
    <section class="bordered dashed section--padded">${student.subject}</section>
    <aside class="pushRight">${student.info}</aside>
    </div>
    `
    } else {
    return `
    <div class="student">
    <h1>${student.name}</h1>
    <section>${student.subject}</section>
    <aside>${student.info}</aside>
    </div>
    `
    }
}

for (let i = 0; i < students.length; i++) {
    const student = students[i]
    console.log(student)
    studentContainer.innerHTML += createStudentComponent(student)
    }

//  DO NOT ATTEMPT TO REDO WHAT A FUNCTION DOES, JUST ALTER THE EXISTING FUNCTION